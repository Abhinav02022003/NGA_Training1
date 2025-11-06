-- TechNova_Assignment.sql
-- Employee Rewards & Performance Management System
-- Author: Abhinav
-- Duration: 45–50 Minutes

-- Step 1: Create Database
CREATE DATABASE TechNovaDB;
USE TechNovaDB;

-- Step 2: Create Tables
CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50) UNIQUE NOT NULL,
    Location VARCHAR(50)
);

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50) NOT NULL,
    Gender CHAR(1),
    DOB DATE,
    HireDate DATE,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Project (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(50) NOT NULL,
    DeptID INT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Performance (
    EmpID INT,
    ProjectID INT,
    Rating DECIMAL(3,2),
    ReviewDate DATE,
    PRIMARY KEY (EmpID, ProjectID),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE Reward (
    EmpID INT,
    RewardMonth VARCHAR(20),
    RewardAmount DECIMAL(10,2),
    PRIMARY KEY (EmpID, RewardMonth),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
);

-- Indexes
CREATE INDEX idx_empname ON Employee(EmpName);
CREATE INDEX idx_deptid ON Employee(DeptID);

-- Step 3: Insert Sample Data
INSERT INTO Department VALUES 
(101, 'IT', 'Bangalore'),
(102, 'HR', 'Delhi'),
(103, 'Finance', 'Mumbai'),
(104, 'Sales', 'Hyderabad'),
(105, 'Marketing', 'Chennai');

INSERT INTO Employee VALUES
(1, 'Asha', 'F', '1990-07-12', '2018-06-10', 101),
(2, 'Raj', 'M', '1988-04-09', '2020-03-22', 102),
(3, 'Neha', 'F', '1995-01-15', '2021-08-05', 101),
(4, 'Arjun', 'M', '1992-09-25', '2019-07-12', 103),
(5, 'Meena', 'F', '1994-03-03', '2022-02-01', 104);

INSERT INTO Project VALUES
(201, 'AI Chatbot', 101, '2021-01-01', '2021-12-31'),
(202, 'Recruitment Portal', 102, '2022-03-01', '2022-09-30'),
(203, 'Finance Tracker', 103, '2020-06-01', '2021-05-31'),
(204, 'Sales Dashboard', 104, '2023-01-01', '2023-06-30'),
(205, 'Ad Campaign', 105, '2023-04-01', '2023-10-31');

INSERT INTO Performance VALUES
(1, 201, 4.5, '2023-03-01'),
(2, 202, 4.0, '2023-03-15'),
(3, 201, 4.8, '2023-04-10'),
(4, 203, 3.9, '2023-02-20'),
(5, 204, 4.6, '2023-05-22');

INSERT INTO Reward VALUES
(1, 'Jan-2024', 2500),
(2, 'Feb-2024', 1800),
(3, 'Mar-2024', 3000),
(4, 'Jan-2024', 900),
(5, 'Apr-2024', 2200);

-- Step 4: Update and Delete
UPDATE Employee SET DeptID = 105 WHERE EmpID = 2;
DELETE FROM Reward WHERE RewardAmount < 1000;

-- Step 5: Queries (Insights)
SELECT EmpName, HireDate FROM Employee WHERE HireDate > '2019-01-01';

SELECT d.DeptName, AVG(p.Rating) AS AvgRating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Department d ON e.DeptID = d.DeptID
GROUP BY d.DeptName;

SELECT EmpName, TIMESTAMPDIFF(YEAR, DOB, CURDATE()) AS Age FROM Employee;

SELECT SUM(RewardAmount) AS TotalRewards
FROM Reward
WHERE RewardMonth LIKE '%2024%';

SELECT e.EmpName, r.RewardAmount
FROM Employee e
JOIN Reward r ON e.EmpID = r.EmpID
WHERE r.RewardAmount > 2000;

-- Step 6: Joins & Subqueries
SELECT e.EmpName, d.DeptName, p.ProjectName, pf.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance pf ON e.EmpID = pf.EmpID
JOIN Project p ON pf.ProjectID = p.ProjectID;

SELECT DeptName, EmpName, Rating
FROM (
    SELECT d.DeptName, e.EmpName, pf.Rating,
           RANK() OVER (PARTITION BY d.DeptName ORDER BY pf.Rating DESC) AS rank_no
    FROM Employee e
    JOIN Department d ON e.DeptID = d.DeptID
    JOIN Performance pf ON e.EmpID = pf.EmpID
) ranked
WHERE rank_no = 1;

SELECT EmpName
FROM Employee
WHERE EmpID NOT IN (SELECT EmpID FROM Reward);

-- Step 7: Transaction Control
START TRANSACTION;
INSERT INTO Employee VALUES (6, 'Sanjay', 'M', '1997-12-01', '2023-08-10', 101);
INSERT INTO Performance VALUES (6, 201, 4.2, '2023-09-15');
COMMIT;

-- Step 8: Query Optimization
EXPLAIN SELECT e.EmpName, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
WHERE e.EmpName LIKE '%a%';

EXPLAIN SELECT e.EmpName, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
WHERE e.EmpName LIKE 'A%';

-- Step 9: Bonus Tasks
CREATE VIEW EmployeePerformanceView AS
SELECT e.EmpID, e.EmpName, d.DeptName, p.ProjectName, pf.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance pf ON e.EmpID = pf.EmpID
JOIN Project p ON pf.ProjectID = p.ProjectID;

DELIMITER //
CREATE PROCEDURE GetTopPerformers(IN deptName VARCHAR(50))
BEGIN
    SELECT e.EmpName, pf.Rating
    FROM Employee e
    JOIN Department d ON e.DeptID = d.DeptID
    JOIN Performance pf ON e.EmpID = pf.EmpID
    WHERE d.DeptName = deptName
    ORDER BY pf.Rating DESC
    LIMIT 3;
END //
DELIMITER ;

CALL GetTopPerformers('IT');

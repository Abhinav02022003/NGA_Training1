const students = [
  { name: "Abhinav", age: 22, course: "CS" },
  { name: "Priya", age: 21, course: "IT" },
  { name: "Aman", age: 23, course: "ECE" }
];

students.forEach(student => {
  console.log(`${student.name} is ${student.age} years old and studies ${student.course}.`);
});

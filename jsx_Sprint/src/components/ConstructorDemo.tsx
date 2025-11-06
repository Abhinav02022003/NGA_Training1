import React, { useEffect } from "react";

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

const ConstructorDemo: React.FC = () => {
  useEffect(() => {
    console.log("🔹 Demonstrating Constructors 🔹");
    const person1 = new Person("Abhinav", 22);
    person1.greet();
  }, []);

  return (
    <div>
      <h2>Constructor Demonstration</h2>
      <p>Check the console to see how constructors work in JavaScript.</p>
    </div>
  );
};

export default ConstructorDemo;

import { Person, Student } from "./person";
const person1 = new Person("Alice", 20, "University A");
console.log(person1.greet());
const student1 = new Student("Bob", 22, "University B", "A");
console.log(student1.greet());
console.log(`Total persons created: ${Person.getCounter()}`);

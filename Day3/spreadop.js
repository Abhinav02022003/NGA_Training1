// <!DOCTYPE html>
// <html>
// <head>
//   <title>ES6 Example</title>
// </head>
// <body>
//   <script>
//     // Example: Spread Operator with Arrays
//     const numbers = [1, 2, 3];
//     const newNumbers = [...numbers, 4, 5, 6];
//     console.log("New Numbers Array:", newNumbers); // Output: [1, 2, 3, 4, 5, 6]

//     // Example: Spread Operator with Objects
//     const person = { name: "Alice", age: 25 };
//     const updatedPerson = { ...person, city: "New York" };
//     console.log("Updated Person Object:", updatedPerson);

//     // ES6 Class Example
//     class Person {
//       constructor(name, age) {
//         this.name = name;
//         this.age = age;
//       }

//       greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//       }
//     }

//     // Create first object
//     const alice = new Person("Alice", 25);
//     alice.greet();
//     alert(`Person Details:\nName: ${alice.name}\nAge: ${alice.age}`);

//     // Create another object
//     const bob = new Person("Bob", 30);
//     bob.greet();
//     alert(`Person Details:\nName: ${bob.name}\nAge: ${bob.age}`);
//   </script>
// </body>
// </html>
const cities = new Set();

    // Add cities to the Set
    cities.add("Delhi");
    cities.add("Mumbai");
    cities.add("Chennai");
    cities.add("Kolkata");
    cities.add("Bangalore");

    // Trying to add a duplicate (it will be ignored)
    cities.add("Delhi");

    console.log("Cities Set:", cities);
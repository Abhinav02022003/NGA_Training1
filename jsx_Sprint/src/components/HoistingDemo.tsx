import React, { useEffect } from "react";

const HoistingDemo: React.FC = () => {
  useEffect(() => {
    console.log("🔹 Demonstrating Variable & Function Hoisting 🔹");

    // Variable hoisting
    // @ts-ignore
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10

    // Function hoisting
    sayHello(); // works even before declaration
    function sayHello() {
      console.log("Hello! Function hoisting works.");
    }

    // Arrow function not hoisted
    try {
      // @ts-ignore
      sayHi(); // ❌ Error (intentional for demo)
    } catch {
      console.log("Arrow functions are NOT hoisted.");
    }

    const sayHi = () => console.log("Hi!");
  }, []);

  return (
    <div>
      <h2>Hoisting Demonstration</h2>
      <p>Check the console for hoisting behavior output.</p>
    </div>
  );
};

export default HoistingDemo;

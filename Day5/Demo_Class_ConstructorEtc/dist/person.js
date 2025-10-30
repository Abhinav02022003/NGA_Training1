export class Person {
    constructor(name, age, institute) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. I study at ${this.institute}.`;
    }
    getId() {
        return this.id;
    }
    static getCounter() {
        return Person.counter;
    }
}
Person.counter = 0;
export class Student extends Person {
    constructor(name, age, institute, grade) {
        super(name, age, institute);
        this.grade = grade;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, I study at ${this.institute}, and my grade is ${this.grade}.`;
    }
}

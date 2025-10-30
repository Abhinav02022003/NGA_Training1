export class Person {
   public  name: string;
    protected age: number;   
    readonly institute : string;
    private id : number;
    static counter: number = 0;
    constructor(name: string, age: number, institute: string) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }
    public greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. I study at ${this.institute}.`;
    }
    protected getId(): number {
        return this.id;
    }
    static getCounter(): number {
        return Person.counter;
    }
}
export class Student extends Person {
    private grade: string;
    constructor(name: string, age: number, institute: string, grade: string) {
        super(name, age, institute);
        this.grade = grade;
    }
    public greet(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, I study at ${this.institute}, and my grade is ${this.grade}.`;
    }
}

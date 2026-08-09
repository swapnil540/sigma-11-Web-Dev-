class Person {
    constructor(name, age) { // Parent class or base class
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) { // child class or derived class
        super(name, age); // Parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subjct) { // child class
        super(name, age); // Parent class  constructor is being called
        this.subjct = subjct;
    }
}

let s1 = new Student("swapnil", 20, 70);
let t1 = new Teacher("Rohit", 35, "C++");

// Accessing methods of another class using inheritance
s1.talk();
t1.talk();
console.log(s1)
console.log(t1)




// 3rd and best way of creating objects

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //  method of prototype object
    talk() { // don't need to define the fnx as prototype externally
        console.log(`Hi, I am ${this.name}`);
    }
}

let p1 = new Person("swapnil", 20); // without new operator constructor can't be invoked
p1.talk();
console.log(p1.age);



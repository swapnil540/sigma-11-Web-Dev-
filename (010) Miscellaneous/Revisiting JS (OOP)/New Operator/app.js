// 2nd way of creating objects , good but syntax is tricky , 3rd and best way is using classes

// constructor - doesn't returns and capital letter
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this); // refers to current object because new keyword is used to initialize the objects 
}

Person.prototype.talk = () => {
    console.log(`Hi, I am ${this.name}`);
}


let p1 = new Person("swapnil", 20); // creating object using new operator

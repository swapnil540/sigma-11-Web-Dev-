// first and worst way of creating objects, 2nd way is using new operator

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, I am ${name}`);
        }
    };

    return person;
}

let p1 = PersonMaker("eve", 30); // individual person object creates its own copy for common method talk()
let p2 = PersonMaker("adam", 20);
let p3 = PersonMaker("tom", 30);

console.log(p1, p2, p3);
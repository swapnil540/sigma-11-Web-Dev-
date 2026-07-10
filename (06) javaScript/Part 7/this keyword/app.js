const student = {
    name: "Swapnil",
    age: 20,
    eng: 75,
    math: 60,
    hindi: 80,
    getAvg() {
        console.log(this); // prints definition of current object
        // let avg = (eng + hindi + math) / 3; // gives not defined error
        let avg = (this.eng + this.hindi + this.math) / 3;
        console.log(`${this.name} scored avg = ${avg}`);
    }
}

function getAvg() {
    console.log(this); // prints eindow object definition
}

student.getAvg(); // calling object's method
getAvg();

// magic of window object
window.document.body.bgColor = "teal";
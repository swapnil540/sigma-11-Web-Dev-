// Arrow functions
const sum = (a, b) => {
    console.log(a+b);
}

sum(2, 3);
console.log(sum); // definition of arrow fnx 

// arrow fnx to calculate cube
const cube = num => {
    return (num**3);
}


console.log(cube);
let c = cube(4);
console.log(c);

// arrow fnx to calculate to the power b
const pow = (a, b) => {
    return a**b;
}

// Implicit return -> paranthesis used for definition instead of curly braces

const mul = (a, b) => (a*b); // syntax has changed to make it compact
console.log(mul(2, 4));


// set time out fnx
// console.log("Hi there!");

// setTimeout(()=> {
//     console.log("Apna college");
// }, 4000); //  4 sec

// console.log("Welcome to");


// set interval fnx
let id = setInterval(() => { 
    console.log("hii, prints this after each timeout");
}, 2000); // 2 sec

clearInterval(id); // not executes above fnx because it's id is cleared before it executes






// Practice Qs -> WAF that prints something 5 times after intervals of 2s each

let id2 = setInterval(() => { // executes 5 times and id is cleared after 10 sec in below setTimeout fnx
    console.log("Hello World");
}, 2000); // 2sec

setTimeout(() => {
    clearInterval(id2);
}, 10000); // 10 sec -> executes after 10 sec and clears id of set interval
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log(a); // a is not defined error
// console.log("hello2"); // code after error will not executes
// console.log("hello2");
// console.log("hello2");

console.log("hello");
console.log("hello");
console.log("hello");
try { // tests code for error
    console.log(a); // a is not defined error
} 
catch(err) { // catches error thrown by try block
    console.log("caught an error.."); 
    console.log(err); // 
}

console.log("hello2"); // code after error executes normally
console.log("hello2");
console.log("hello2");
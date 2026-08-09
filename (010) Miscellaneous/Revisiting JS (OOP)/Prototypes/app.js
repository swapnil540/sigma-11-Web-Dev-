// inefficient way of coding , smae properties are repeating so we create the concept of OOPS
// const student1 = {
//     name: "Swapnil",
//     age: 20,
//     marks: 70
// };
// const student1 = {
//     name: "eva",
//     age: 21,
//     marks: 80
// };
// const student1 = {
//     name: "bob",
//     age: 15,
//     marks: 60
// };

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];

arr.sayHello = () => {
    console.log("Hello, I am arr");
}

arr2.sayHello = () => {
    console.log("Hello, I am arr");
} 

console.log(arr.__proto__); // reference to actual prototype object
console.log(Array.prototype); // Actual prototype object, can't be access using variable name , using datatype can.




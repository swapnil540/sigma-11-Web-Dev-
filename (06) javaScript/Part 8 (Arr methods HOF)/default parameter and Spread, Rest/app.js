function sum(a, b = 3) { // default value remains same , when only one argument is passed in 
    return a+b;
}

console.log(sum(2)); // 5
console.log(sum(2, 5)); // 7


// Spread
console.log(..."ApnaCollege"); // A p n a C o l l e g e
let arr = [1, 2, 3, 4, 0, -1, 5, 6, -3];
console.log(...arr); 
console.log(Math.min(...arr)); // need to pass individual element in min method

// spread with array literals
let newArr = [...arr]; // copying array elements using spreas, instead of writing elements individually
console.log(...newArr);
newArr.push(8); // doesn't reflects in original array arr because newArr is the copy


let chars = [..."hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];// combining even and odd arr elements into single arr nums

console.log(...nums);


// Spread with object literals
const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, id: 1234, country: "india"};

console.log(data);
console.log(dataCopy);

// copying arr to objects
let obj1 = {...arr}; // idx becomes key for arr val
console.log(obj1);

let obj2 = {..."Hello"}; // idx becomes key for string val
console.log(obj2);


// Rest -> opposite to spreas, bundles indefinite no. of args into single arr

function sum(...args) {
    
}
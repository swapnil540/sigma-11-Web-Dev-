// let student1 = "Swapnil";
// let student2 = "Rohit";
// let student3 = "Vaibhav";

let students = ["Swapnil", "Rohit", "Vaibhav", "Sakesh"]; // string array
console.log(students[0]);
console.log(students[0][1]); // 'w' 
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

let nums = [1, 2, 3, 4, 5]; // number array

console.log(nums.length);

let info = ["aman", 23,89.5] // mixed array

let empty = []; // empty array

// Arrays are mutable in JS
let fruits = ["litchi", "banana", "apple"];

console.log(fruits);
fruits[0] = "banana";
console.log(fruits);
fruits[0][3] = 'p'; // can't change string
console.log(fruits);
fruits[6] = "pineapple"; // array size incrases to 7
console.log(fruits);

// Array methods
let cars = ["audi", "bmw", "maruti", "xuv"];
console.log(cars);
// push
cars.push("toyota");
cars.push("hyundai"); 
console.log(cars);
// unshift
cars.unshift("defender");
console.log(cars);
// pop
let deletedBrand1 = cars.pop(); // hyundai is deleted from end
console.log(cars); 
// shift 
cars.shift(); // defender is deleted from front
console.log(cars); 

let primary = ["red", "yellow", "blue"];
// indexOf
console.log(primary.indexOf("yellow")); // 1
console.log(primary.indexOf("yEllow")); // -11
// includes
console.log(primary.includes("red")); // true
console.log(primary.includes("black")); // false

// concat
console.log(primary.concat(cars)); // returns new array

// reverse
primary.reverse(); // reverses original array

// slice 
console.log(primary.slice(0, 2));
console.log(primary.slice(-2)); // returns last two elements

// splice
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors);
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);
console.log(colors.splice(1, 0, "pink"));
console.log(colors);
console.log(colors.splice(2, 1, "white"));
console.log(colors);


// sort
let chars = ['t', 'e', 'q', 'a', 's', 'b', 'd'];
let nums2 = [5, 4, 1, 3, 8, 0, -1];

console.log(chars.sort());


// array references

let arr = ['a', 'b', 'c'];
let arrCopy = arr;
console.log(arr == arrCopy);

// constant arrays

const Arr = [1, 2, 3, 4];
Arr.push(5);
console.log(Arr);

// Practice qs. tic-tac-toe matrix representation
let mat = [['X', null, 'O'], [null, 'X', null] , ['O', null, 'X']];
console.log(mat);
mat[0][1] = 'O';
console.log(mat);



let arr = [1, 2, 3, 4, 5];

// for each method
console.log("1.forEach method");
let print = function (el) {
  console.log(el);
};

arr.forEach(print);
console.log("--------------");
// OR
arr.forEach(function (el) {
  console.log(el);
});

console.log("--------------");

arr.forEach((el) => {
  // arrow fnx
  console.log(el);
});
console.log("--------------");

// arr of objects
let studentArr = [
    {
        name: "Swapnil",
        marks: 70,
    },
    
    {
        name: "Rohit",
        marks: 80,
    },
    
    { name: "Sakesh", 
        marks: 90 
    },
];

studentArr.forEach((student) => {
    console.log(student);
});
console.log("--------------");
studentArr.forEach((student) => {
    console.log(`${student.name}  ${student.marks}`);
});
console.log("--------------");


console.log("2.map method");
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el*2;
})
console.log(double)
console.log("--------------");

let gpa = studentArr.map((el) => {
    return el.marks/10;
});
console.log(gpa);
console.log("--------------");

// filter method
console.log("3.filter method");
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter((num) => (num%2 != 0)); // even -> true , odd -> false
console.log(even);
console.log("--------------");

// Every method
console.log("4.Every method");
let result = [1, 2, 3, 4].every((num) => (num%2 == 0));
console.log(result); // false

result = [2, 4].every((num) => (num%2 == 0));
console.log(result); // true


console.log("--------------");

console.log("5.Some method");
result = [1, 2, 3, 4].some((num) => (num%2 == 0));
console.log(result); // true

console.log("--------------");

console.log("6.reduce method");

let ans = [1, 2, 3, 4].reduce((res, el) => (res+el));
console.log(ans); // 10

// reduce fnx to find max element
let maxEl = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2].reduce((max, el) => {
    if(el > max) {
        return el;
    } else {
        return max;
    }
});

console.log(`Max element in entered arr`); // 8
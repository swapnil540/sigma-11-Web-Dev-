// function to print hello
function printHello() { // fnx definition
    console.log("Hello");
}

function printName(name) {
    console.log(`Your name is ${name}`);
}

// printName("Swapnil");

// printHello(); // fnx call

// fnx to roll a dice
function rollDice() {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice number is ${diceNum}`);
}

// rollDice();


// Fnx with arguments
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

// printInfo("Swapnil", 20);
// printInfo("Rohit"); // last arguments can be miss out


// avg of three nums

function calcAvg(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    console.log(`Avergae of ${num1}, ${num2}, and ${num3} is ${avg}`);
}

// calcAvg(5, 8, 9); // 7.33

//  fnx prints table of n

function printTable(num) {
    for(let i=num; i<=num*10; i+=num) {
        console.log(i);
    }
}

// printTable(88);

// return keyword
function sum(a, b) {
    return a+b;
    console.log("Calculated sum successfully"); // will never execute
}

// console.log(sum(5, 5));
// console.log(sum(sum(2, 5), 3)); // 10

//  create fnx that returns sum of nums from 1 to n
function getSum(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
}

// console.log(getSum(5)); // 15

// fnx to concatenate all strings in an array

function concatStrings(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        result += str[i];
    }

    return result;
}

let ans = concatStrings(["Swapnil", "Rohit", "Sakesh", "Vaibhav", "Swapnil2"]);
// console.log(ans);

// Function Expressions
const product = function(a, b) {
    return a*b;
}

console.log(product(2, 3)); //6

let printGreet = function() {
    console.log("Helllo");
}

printGreet; // prints definition of fnx on console
printGreet();

printGreet = function() {
    console.log("namaste");
}



// Methods -> functions for objects

const calculator = {
    num: 55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    // MEthods shorthand
    mul(a,b) {
        return a*b;
    },
    div(a,b) {
        return a/b;
    }
};
console.log(calculator); // prints definition of calculator object on console window
console.log(calculator.add); // prints defintion of add method
console.log(calculator.add(1, 2)); // 3
console.log(calculator.mul(3, 2)); /// 6








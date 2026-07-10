let age = 20;
// if statement

console.log(`age : ${age} years`);
if(age >= 18) {
    console.log("you can vote.");
    console.log("You can drive,");
}

if(age < 18) {
    console.log("you cannot vote.");
    console.log("You cannot drive,");
    
}

let firstName = "Swapnil";
if(firstName == "Swapnil") {
    console.log(`Welcome ${firstName}`);
}

// Traffic light system 
let color = "yellow";

console.log(`Traffic  light color : ${color}`);

if(color === 'red') {
    console.log("Stop!");
}
else if(color === "yellow") {
    console.log("Slow Down, Go slowly and carefully.");
}
else if(color === "green") {
    console.log("Go.");
}
else {
    console.log("Traffic light is broken.");
}




// else if statement
let marks = 74;

console.log(`marks : ${marks} ,  Grade :`);


if(marks >= 80) {
    console.log("A+");
} else if(marks >= 60) {
    console.log("A");
} else if(marks >= 33) {
    console.log("B");
} else if(marks < 33) {
    console.log("F");
}

// else statement

let age2 = 15;

if(age2 >= 18) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}


// Nested if else
let mrks = 70;

if(mrks >= 33) {
    console.log("Pass");
    if(mrks >= 80) {
        console.log("Grade : O"); // outstanding
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time!");
}
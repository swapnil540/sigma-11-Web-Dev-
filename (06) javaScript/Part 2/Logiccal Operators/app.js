// Logical operators

let marks = 50;
// Logical AND
// if(marks >= 33 && marks>=80) {
//     console.log("Pass");
//     console.log("A+");
// }

//Logical OR
if(marks >= 33 || marks >=80) {
    console.log("Pass.");
}

// Logical Not

console.log(`Not of true : ${!true}`);

// Practice Qs -. Good string

let str = 'actual';

if((str[0] == 'a' || str[0] == 'A') && (str.length > 3)) {
    console.log(`"${str}" is a good string.`);
} else {
    console.log(`"${str}" is not a good string.`);
}

// Alert and prompts

alert("Simple alert messaage , just click ok to move further.")
let roll = prompt("Enter your roll no. ");
console.log(`Roll no. is: ${roll} and type of roll no. is ${typeof(roll)}`);

//
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
alert(`Welcome  ${firstName + " " + lastName} ! , click ok to move further.`);


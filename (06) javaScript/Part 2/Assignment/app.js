
// Qs1.
let num = 15;
 if(num%10 == 0) {
    console.log("Good");
 }
 else {
    console.log("Bad");
 }

 // Qs2.
//  let name = prompt("Enter your name");
//  let age = prompt("Enter your age");

//  alert(`${name} is  ${age} years old.`);

// Qs.3

let quarter = 3;

switch(quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    
}

 // Qs.4
 let str = "advantage";

 if((str[0] === 'A' || str[0] == 'a') && (str.length > 5)) {
    console.log("Entered string is golden string");
 } else {
    console.log("Entered string is not a golden string");
 } 


 // Qs5.
  let num1 = 50 , num2 = 2 , num3 = 10;

  if((num1 > num2) && (num1 > num3)) {
    console.log(num1);
  } else if( (num2 > num1) && (num2 > num3)) {
    console.log(num2);

  } else {
    console.log(num3);
  }

// Qs6.

let n1 , n2;
if(n1%10 === n2%10 ) {
    console.log(`${n1} and ${n2} has same last digit`);
} else {
    console.log(`${n1} and ${n2} not has same last digit`);
}

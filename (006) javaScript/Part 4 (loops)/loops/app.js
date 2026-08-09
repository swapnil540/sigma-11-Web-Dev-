// for(let i = 1; i<=5; i++) { // forward
//     console.log(i);
// }
// let i;
// for(i = 5; i>=1; i--) { // Backward
//     console.log(i);
// }

// // Odd numbers 1 to 15
// for(let i=1; i<=15; i++) {
//     if(i%2 != 0) {
//         console.log(i);
//     }
// }

// Even numbers 2 to 10
// for(let i=2; i<=10; i+=2) {
//     console.log(i);
// }

// Multiplication table for n
// let n = prompt("Enter your number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i+=n) {
//     console.log(i);
// }

//Nested for loop
// for(let i=1; i<=3; i++) {
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++) {
//         console.log(j);
//     }
// }

// // Favourite movie 
// let favMovie = "avatar";

// let guess = prompt("Guess my favourite movie");

// while(guess != favMovie) {
//     if(guess == "quit") {
//         alert("You quit the game.");
//         break;
//     }
//     guess = prompt("wrong guess, guess again. enter quit to quit the game");
// }

// if(favMovie == guess) {
//     alert("Congratulation, You guessed it.");
// } 

// Break keyword
// let i = 1;
// while(i <= 5) {
//     if(i == 4) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log(`we used break at ${i}`);

// Loops with array
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");

// for(let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// for(let i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }

// Nested loops with nested array
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for(let i=0; i<heroes.length; i++) {
//     console.log(`LIST ${i}`);
//     for(let j=0; j<heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }


// for of loop
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for(fruit of fruits) {
    console.log(fruit);
}

for(char of "Swapnil Meshram") {
    console.log(char);
}

// Nested for of loop with nested array
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for(list of heroes) {
    for(hero of list) {
        console.log(hero);
    }
}
alert("Welcome to number guessing game, enter 0 to quit");


let max = prompt("Enter max number");
max = parseInt(max);

let isGuessed = false;
let guess = prompt("Guess the number");

randomNum = Math.floor( Math.random() * max ) + 1;

while(!isGuessed) {
    guess = parseInt(guess);
    if(guess == 0) {
        alert("You quit the game.");
        break;
    } 
    else if(randomNum != guess) {
        if(randomNum > guess) {
            alert("hint: Your guess num was too small, try again");
        } else {
            alert("hint: Your guessed num was too large, try again");
        }
        guess = prompt("Guess the number again");
    }
    else {
        alert(`Congratulations, you guessed it , random num was ${randomNum}`);
        isGuessed = true;
    }
}


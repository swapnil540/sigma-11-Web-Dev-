function oddOrEvenFactory(request) { // factory function
    if(request == "odd") {
        return function(n) { // return test odd fnx
            console.log(!(n%2 == 0));
        }
    } 
    else if(request == "even") {
        return function(n) { // return test even fnx
            console.log(n%2 == 0);
        }
    }
    else {
        console.log("wrong request");
    }
}

let request = "odd"; // or even
let odd = oddOrEvenFactory(request); // this call recieves test odd fnx definition
odd; // run this cmnd on console window to check the definition of odd variable
odd(3); // true
odd(4); // false

request = "even";
let even = oddOrEvenFactory(request); // this call recieves test even fnx definition
// even; // run this cmnd on console window to check the definition of even variable
even(4); // true
even(3); // false


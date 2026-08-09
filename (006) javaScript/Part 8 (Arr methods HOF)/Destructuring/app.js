// Destructuring arr
let names = ["tony", "bruce", "peter", "steve", "xyz", "abc", "pqr"];

// let winner = names[0];
// let runnerup = names[1]

let [winner, runnerup, other] = names;
console.log(winner, runnerup, other); // "tony" "bruce" "peter" 
[winner, runnerup, ...others] = names;
console.log(winner, runnerup, ...others); // "tony" "bruce" and rem values of arr names 



// Destructuring with objects
const student = {
    name: "Swapnil",
    age: 20,
    subjects: ["english", "hindi", "maths", "social science"],
    marks: 70,
    username: "Swapnil@123",
    city: "Nagpur",
    password: "abcd",
};

const {username: user, password: pass, city: place = "Pune"} = student;
console.log(user, pass, place); // Swapnil@123  abcd  Nagpur
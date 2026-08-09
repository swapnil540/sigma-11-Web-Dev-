// Qs.1
let arr = [7, 9, 0, -1];
let n = 3;
console.log(arr.slice(0, n));

// Qs.2
console.log(arr.slice(-n));

//Qs.3
let str = "abc";

if(str.length == 0) {
    console.log("string is blank.");
} else {
    console.log("string is not blank.")
}

// Qs.4
let str2 = "AppleMadeMeCry";
let idx = 1;

if(str2[idx] >= 'a' && str2[idx] <= 'z') {
    console.log("lower");
} else {
    console.log("NOT lower");
}


// Qs.5 
let str3 = "        Happy Birthday     "
console.log(str3.trim());


// Qs.6

let arr2 = [1, 2, 3, 4, 5, 6];
let target = 5;
if(arr2.includes(target)) {
    console.log("Exists")
} else {
    console.log("NOT Exists")
}
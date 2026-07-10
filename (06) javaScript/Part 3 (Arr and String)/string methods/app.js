// string methods without argument
// trim
let msg = "   hello    "
console.log(msg);
let newMsg = msg.trim();
console.log(newMsg);

// toUpperCase and toLowerCase
let str = "Random String";
console.log(str.toUpperCase());
console.log(str.toLowerCase()); 

// string methods with argument
// indexOf -> takes string as argument
let str2 = "IloveCoding";

console.log(str2.indexOf("love")); // 1
console.log(str2.indexOf("J")); // -1 (not found)
console.log(str2.indexOf("o")); // 2 (only i idx)

// Method Chaining
console.log(msg.trim().toUpperCase());

// Slice method
let line = "ApnaCollege";

console.log(line.slice(0,4)); // 0 - 3 Apna
console.log(line.slice(4, line.length)) // College
console.log(line.slice(-2)); // "ge "

// replace method
console.log(line.replace("College", "House"));


// repeat method
console.log(line.repeat(3)); // "ApnaCollegeApnaCollegeApnaCollege"

// Practice Qs
let message = "help!";
console.log(message.trim().toUpperCase());

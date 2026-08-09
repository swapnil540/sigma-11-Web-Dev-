const student = { // its complete address can't changed
    name : "Swapnil",
    age : 20,
    marks : 75,
    city : "Bhandar"
};
console.log(student);

console.log(student.name); // same as student["name"]
console.log(student["name"]);

const item = {
    price: 100.99,
    discount : 50,
    colors : ["red", "pink"]
};

console.log(item.colors[0]);

// Thread / twitter post
const post = {
    username: "@swapnilmeshram",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
    
};

// key converts to string demo
const obj = {
    1: "A",
    2: "B",
    true: "C",
    nulll: "D",
    undefined: "E"
};


// Add / update the object properties
student.city = "Tumsar"; // key city's value changed to Tumsar
student.marks = "A";
student.gender = "male"; // addes new key value pair into sutdent object
console.log(student);

delete student.city; // deletes city key value pair from object
console.log(student);


// object of objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    }, 
    shradha: {}, // empty object
    karan: {
        grade: "O",
        city: "Mumbai"
    }
};

console.log(classInfo); // objects are passed by reference
console.log(classInfo.aman.city);
classInfo.aman.city = "Gurgaon"; // changes reflect into previous object also because it points to same object
console.log(classInfo.aman.city);
console.log(classInfo);


// Array of objects
const classData = [
    { //object 1
        name: "Swapnil",
        grade: "B",
        city: "Nagpur"
    },

    { // object 2
        name: "Rohit",
        grade: "A",
        city: "Gondia"
    },

    { // object 3
        name: "Sakesh",
        grade: "A+",
        city: "Sakoli"
    }
];

console.log(classData)
console.log(classData[1])
console.log(classData[1].name)
console.log(classData[1].grade)
console.log(classData[1].city)
classData[1].gender = "Male"; // new property added to object at idx 1
console.log(classData[1]);


// Math random
// generating random number between range 1 to 10
let num = Math.floor( (Math.random() * 10) ) + 1;
console.log(num);

// generating random number between range 1 to 50
num = Math.floor( (Math.random() * 50) ) + 1;
console.log(num);
// generating random number between range 1 to 100
num = Math.floor( (Math.random() * 100) ) + 1;
console.log(num);
// generating random number between range 1 to 150
num = Math.floor( (Math.random() * 150) ) + 1;
console.log(num);
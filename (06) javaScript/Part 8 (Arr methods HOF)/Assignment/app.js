// Qs. 1
let arr = [1, 2, 3, 4];
let squareArr = arr.map((el) => el*el);
console.log(...squareArr); // 1 4 9 16
let sum = squareArr.reduce((add, el) => add+el);
console.log(`Avg = ${sum/squareArr.length}`); // 7.5

//Qs. 2
let newArr = arr.map((el) => el+5);
console.log(...newArr); // 6 7 8 9

// Qs. 3
let words = ["hii", "HELLO", "bye", "THANKS"];
let upperCaseWords = words.filter((word) => {

    if(word === (word.toUpperCase())) {
        return true;
    }
})

console.log(`Original words array-> ${words}`);
console.log(`new upper case words array-> ${upperCaseWords}`);


// Qs. 4
function doubleAndReturnArgs(arr, ...args) {
    let doubledArgs = args.map((el) => el*2);
    let newArr = [...arr, ...doubledArgs];
    return newArr;
}

console.log(doubleAndReturnArgs(arr, 8, 3, 5, 6, 8, 9, 0));


// Qs. 5
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

const studentSchoolInfo = {
    name: "Swapnil",
    class: "10th",
    percentage: 65,

};

const studentCollegeInfo = {
    degree: "B.E",
    college: "MIET bhandara",
    branch: "Computer Engineering",
}

const candidateinfo = mergeObjects(studentSchoolInfo, studentCollegeInfo);
console.log(candidateinfo);



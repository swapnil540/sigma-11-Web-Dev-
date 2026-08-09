// Qs. 1
const arrayAverage = (arr) => {
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  return arrSum / arr.length; // avg
};

let arr = [10, 20, 30];

console.log(arrayAverage(arr)); // 20

//Qs. 2

const isEven = (n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(3)); // false

// Qs.3
const object = {
  message: "Hello,World!",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000); // after 1 sed undefines

// Qs 4
let length = 4;
function callback() {
  console.log(this.length); // undefined
}

const object2 = {
  length: 5,
  method(callback) {
    callback();
  }
};
object2.method(callback, 1, 2);

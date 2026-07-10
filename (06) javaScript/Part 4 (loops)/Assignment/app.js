// Qs.1 -> delete all occurences of num in arr
let arr = [1, 2, 3, 4, 5, 20, 6, 2, 3];
let num = 2;
let idx = arr.indexOf(num);
while(idx != -1) {
    arr.splice(idx, 1);
    idx = arr.indexOf(num);
}

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
console.log("---------------------");

// Qs.2 
let number = 123;
let digSum = 0;
let count = 0;
while(number > 0) {
    // console.log(number);
    count++; // count digits
    digSum += number % 10; // sum digits
    number /= 10;
    number = Math.floor(number); // converts decimal to nearest integer
}
console.log(count); 
console.log("---------------------");

// Qs.3
console.log(digSum);
console.log("---------------------");

// Qs. 4
let n = 7;
let fact = 1;
for(let i=1; i<=n; i++) {
    fact *= i;
}
console.log(fact);
console.log("---------------------");

// Qs. 5 largest element in an array
let largest = arr[0];
for(let i=1; i<arr.length; i++) {
    if(arr[i] > largest)  {
        largest = arr[i];
    }
}
console.log(largest)
console.log("---------------------");


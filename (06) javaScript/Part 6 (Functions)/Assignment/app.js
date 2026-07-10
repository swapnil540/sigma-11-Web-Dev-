// Qs.1
let arr = [2, 30, 55, 4, 5, 8, 10, 34, 95];

const largeElementThanNum = function(num) {
    let largeElements = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num) {
            largeElements.push(arr[i]);
        }
    }

    return largeElements;
}

console.log(largeElementThanNum(10));

// Qs.2
const mapAlpha = Array(26).fill(0);
let str = "abcdabcdefgggh";
let ans = "";

const extractUniqueChars = function(str) {
    for(let i=0; i<str.length; i++) {
        let mapIdx =  str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(mapAlpha[mapIdx] == 0) {
            ans += str[i];
            mapAlpha[mapIdx]++;
        }
    }
    return ans;
}

console.log(extractUniqueChars(str));


// Qs.3

let countries = ["Australia", "Germany", "United States of America"];
let result = "";

const longestCountryName = function(countries) {
    for(let i=0; i<countries.length; i++) {
        if(countries[i].length > result.length) {
            result = countries[i];
        }
    }

    return result;
}

console.log(longestCountryName(countries));

// Qs.4

const countVowels = function(str) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] == 'a' ||
           str[i] == 'e' ||
           str[i] == 'i' ||
           str[i] == 'o' ||
           str[i] == 'u' ||
           str[i] == 'A' ||
           str[i] == 'E' ||
           str[i] == 'I' ||
           str[i] == 'O' ||
           str[i] == 'U'  ) {

            count++;

        }
    }

    return count;
}

console.log(countVowels("Actually We was not present their"))


// Qs.5 WAF generate random number within range (start,end)

const generateRandomNumInRange = function(start, end) {
    let diff = end - start;
    if(start <= end)  {
        return Math.floor(Math.random() * diff) + start+1;
    } else {
        console.log("Invalid Range");
    }
}

console.log(generateRandomNumInRange(10, 15));
// first API request trhough JS code

let url = "https://catfact.ninja/fact/";

fetch(url) // 1st API request
.then((response) => { // promise result is the response object
    return response.json();
})
.then((data) => {
    console.log(data);
    console.log(data.fact);

    return fetch(url); // 2nd API request
})
.then((respose) => {
    return respose.json();
})
.then((data2) => {
    console.log(data2);
    console.log(data2.fact);
})
.catch((err) => {
    console.log("ERROR- ", err);
});


console.log("This code doesn't waits for API to resolve because they are asyncrhonous");


// fetch with async and await

async function getFacts() { // asynchronous fnx
    try {
        let res1 = await fetch(url); // returns promise
        let data1 = await res1.json(); // this also returns promise
        console.log(data1); // find this o/p by line no. on console window
        
        let res2 = await fetch(url); // returns promise
        let data2 = await res2.json(); // this also returns promise
        console.log(data2); // find this o/p by line no. on console window
    } catch(err) {
        console.log("ERROR - ", err);
    }

    console.log("This code executes even though error occurs")

}

getFacts();

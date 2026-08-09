// axios -> better way to get response of API instead of fetch, axios removes parsing step
// axios provides actual data not readable stream like fetch() method

let url =  "https://catfact.ninja/fact";
let factPara = document.querySelector(".fact");
let btn = document.querySelector("button")

async function getFacts() {
    try {
        let response = await axios.get(url);
        console.log(response);
        console.log(response.data); // actual data
        console.log(response.data.fact); // actual data

        return response.data.fact;

    } catch(err) {
        console.log("ERROR- ", err);
        return "NO FACT FOUND TRY AGAIN..";
    }
}

// getFacts();

btn.addEventListener("click", async () => { // await can be used only inside async function
    let fact = await getFacts(); // normally getFacts() returns promise object to get the actual data we should wait
    factPara.innerText = fact;
});


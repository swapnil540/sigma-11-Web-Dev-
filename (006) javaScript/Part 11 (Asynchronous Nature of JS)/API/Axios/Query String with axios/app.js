let url1 = "http://universities.hipolabs.com/search?name=";
let url2 = "http://universities.hipolabs.com/search?name=india&state-province";
let firstBtn = document.querySelector("#firstBtn");
let secondBtn = document.querySelector("#secondBtn");
let countryInp = document.querySelector("#countryInp");
let stateInp = document.querySelector("#stateInp");
let list1 = document.querySelector(".list1");
let list2 = document.querySelector(".list2");


// let country = "canada";

// async function listUniversities(region){
//     list.innerText = "";
//     let country = countryInp.value;  
//     console.log("button clicked");
//     let collegeArr = await getColleges(country);

//     for(college of collegeArr) {
//         console.log(college.name);
//         let li = document.createElement('li');
//         li.innerText = college.name;
//         list.appendChild(li);
//     }
// }

function showUniversities(universityArr, callBy, stateVal) {
    for(university of universityArr) {
        let li = document.createElement("li");
        console.log(university);
        li.innerText = university.name;
        if(callBy === "country") {
            list1.appendChild(li);
        } else if(callBy === "state") {
            if(university.state-province == stateVal) {
                list2.appendChild(li);
            }
        }
    
    }
}

firstBtn.addEventListener("click", async () => { // universities by country
    list1.innerText = "";
    let country = countryInp.value;
    console.log("button clicked")
    let uniArr = await getUniversities(country, url1);
    showUniversities(uniArr, "country");
});

secondBtn.addEventListener("click", async () => { // indian universities by state
    list2.innerText = "";
    let state = stateInp.value;
    console.log("button clicked")
    let uniArr = await getUniversities(state, url2);
    showUniversities(uniArr, "state", state);
})

async function getUniversities(region, url) {
    try {
        let res = await axios.get(url + region); // query string name = country
        // console.log(res.data);
        return res.data;
    } catch(err) {
        console.log(err);
        return [];

    }
    
}



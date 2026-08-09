let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let btn = document.querySelector("button");
let firstPara = document.querySelector(".first-para");

let url = "https://dog.ceo/api/breeds/image/random";

async function setPhotos() {
    firstPara.innerHTML = "Images are loading. Please wait...";

    let img1Link = await getDogPhotos();
    let img2Link = await getDogPhotos();

    

    box1.style.backgroundImage = `url(${img1Link})`;
    box1.style.backgroundSize = "cover";

    box2.style.backgroundImage = `url(${img2Link})`;
    box2.style.backgroundSize = "cover";

    btn.classList.remove("newBtnStyle");
    firstPara.classList.add("hide");
    
}

async function getDogPhotos() {
    try {
        // let respose1 = await fetch(url); // API call using fetch
        // let jsonData1 = await respose1.json();
        // let img1Link = jsonData1.message;

        let imgData = await axios.get(url); // API call using axios library
        let imgLink = imgData.data.message;

        console.log(imgLink);
        
        return imgLink;
    } 
    catch(err) {
        firstPara.innerHTML = "Sorry failed to fetch images try again...";
        firstPara.classList.remove("hide");
        btn.classList.remove("newBtnStyle");
    }
    
}


// btn event listener
btn.addEventListener("click", () => {
    setPhotos();
    btn.classList.add("newBtnStyle");
    firstPara.classList.remove("hide");
    
});
firstPara.classList.add("hide");









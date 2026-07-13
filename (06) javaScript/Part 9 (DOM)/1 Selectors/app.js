// element selector by ID
let imgObj = document.getElementById("mainImg"); // selecting img element as an object
console.dir(imgObj.tagName); // IMG
// imgObj.src = "assets/creation_1.png"; // to change the img 
console.log("--------");

let h1Obj = document.getElementById("mainHeading");
console.dir(h1Obj.innerText); // Spider Man
h1Obj.innerHTML = "Iron man"; // manipulating HTML element
console.log("--------");

let decrptionObj = document.getElementById("description");
console.dir(decrptionObj.innerText);
console.log("--------");


// Element selector by className -> returns collection of html elements as objects if not exists returns empty collection


let smallImgs = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImgs.length; i++) {
//     smallImgs[i].src = "assets/spiderman_img.png";
//     console.log(`value of img no. ${i} is changed.`);
// }
console.log("--------");


// Element Selector by TagName
let paras = document.getElementsByTagName("p"); // returns collection of HTML elements
console.dir(paras);
console.log("--------");

// Query Selectors
console.dir(document.querySelector('h1')); // selects first h1 element
console.log("--------");
console.dir(document.querySelector('#description')); // selects first element with id = description
console.log("--------");
console.dir(document.querySelector('.oldImg')); // selects first element with class = oldImg
console.log("--------");
let allListsInBox = document.querySelectorAll('.box li'); // selects all li elements inside element with class = box

console.dir(allListsInBox[0]);
console.dir(allListsInBox[0].innerText);
console.log("--------");


console.dir(allListsInBox[2].innerHTML);
console.dir(allListsInBox[2].innerText);
console.log("--------");







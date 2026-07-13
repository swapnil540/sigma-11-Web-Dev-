// Manipulating HTML element through content properties of DOM
let para = document.querySelector('p');
console.dir(para.innerHTML);
console.dir(para.innerText);
console.dir(para.textContent);

// para.innerHTML = "I am, <b>peter parker</b>";

// Manipulating Attributes -> getters and setters

let img = document.querySelector('#mainImg');
let attrVal = img.getAttribute("src");
console.dir(attrVal);
img.setAttribute('src', "assets/creation_3.jpeg");

// img.setAttribute('class', "images");
// console.dir(img.getAttribute('class'));

// Manipulating style
let heading = document.querySelector('h1');
// heading.style.backgroundColor = "black";

let links = document.querySelectorAll(".box  a");

for(link of links) {
    link.style.color = "red"; // inline style not in explicit css file
}


// classList
console.dir(img.classList);

heading.classList.add("green");
console.log(heading.classList);

heading.classList.add("underline");
console.log(heading.classList);

heading.classList.remove("underline");
console.log(heading.classList);

console.log(heading.classList.contains("underline")); // false
console.log(heading.classList.contains("green")); // true

console.log(heading.classList.toggle("green")); // class exists , so removes it and returns false
console.log(heading.classList.toggle("green")); // class doesnt exists , so adds it and returns true
console.log(heading.classList.toggle("underline")); // doesn't exists , adds it and returns true



let box = document.querySelector(".box");
box.classList.add("yellowBg");

let h4 = document.querySelector("h4");
console.dir(h4.parentElement); // div
console.dir(h4.children); // returns empty collection

console.dir(box.children); // returns collection of 2 child nodes
console.dir(box.childElementCount); // 2

let h2 = document.querySelector("h2");

console.dir(h2.previousElementSibling); // img
console.dir(h2.nextElementSibling); // p
h2.previousElementSibling.previousElementSibling.classList.add("yellowBg"); // changing background color of h1 indirectly with the help of h2 (About) through sibling relation


// Creating and inserting/Adding elements on webPage through JS
let newBtn = document.createElement('button');
newBtn.innerText = "click me";

// inserting button onto web page
let body = document.querySelector('body');
newBtn.innerHTML = "<b>click me</b>";
// body.appendChild(newBtn); // can append only at one position at a time
box.appendChild(newBtn);

let newP = document.createElement('p');
newP.innerText = "Hi, I am new p.";

box.appendChild(newP);
newP.append("This is new text appended through append method");

box.prepend(newP);


let newBtn2 = document.createElement('button');
newBtn2.innerHTML = "<b> NEW BTN1 beforebegin </b>";
let newBtn3 = document.createElement('button');
newBtn3.innerHTML = "<b> NEW BTN2 afterbegin</b>";
let newBtn4 = document.createElement('button');
newBtn4.innerHTML = "<b> NEW BTN3 beforeend</b>";
let newBtn5 = document.createElement('button');
newBtn5.innerHTML = "<b> NEW BTN4 afterend</b>";

let firstP = document.querySelector("p");
firstP.style.backgroundColor = "pink"

firstP.insertAdjacentElement('beforebegin', newBtn2) // before begin
firstP.insertAdjacentElement('afterbegin', newBtn3) // after begin
firstP.insertAdjacentElement('beforeend', newBtn4) // before end
firstP.insertAdjacentElement('afterend', newBtn5) // after end


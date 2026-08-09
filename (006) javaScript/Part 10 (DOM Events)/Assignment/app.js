// Qs. 1
let outerBox = document.querySelector(".outer");
let p1 = document.querySelector(".para1");

// mouseout tirggers when mouse moves out of target element
outerBox.addEventListener("mouseout", function() { // not considers childs as part of parent and fires mouseout event when mouse is over child 
    p1.innerText = "mouse moved out of Parent box";
    // alert("Mouse pointer moved out of box"); 
    
});

outerBox.addEventListener("mouseenter", () => {
    p1.innerText = "mouse is over Parent box";
});

// keypress event
let inp = document.querySelector("input");
let p2 = document.querySelector(".para2");

// key down tracks combination also such as combination of shift key with another key
inp.addEventListener("keypress", (event) => { // kaypress shows only key pressed not the combination like shift, alt etc
    console.log(`key = ${event.key} ,  code = ${event.code}`);
    p2.innerText = `code = ${event.code} , key = ${event.key}`;
});

// scroll event -> fired when element or document is scroll
// scrollend event -> fired when scroll of document ends

let bigBox = document.querySelector(".bigBox");
let p3 = document.querySelector(".para3");

document.addEventListener("scroll", () => {
    p3.innerHTML = "<h3>scroll Event fired!</h3> ";
});

document.addEventListener("scrollend", () => {
    p3.innerHTML = "<h3>scrollend event fired!</h3>";
});

// load event -> fired when page is fully loaded

// window.addEventListener("load", () => {
//     alert("Page is fully loaded");
// });




//Qs. 2
let btn = document.createElement('button');
let hr3 = document.querySelector(".hr3")
btn.innerText = "click me";

hr3.insertAdjacentElement("afterend", btn);

btn.addEventListener("click", function() {
    this.classList.add('greenBg');
})

// Qs.3
let user = document.querySelector("#user");
let h2 = document.querySelector('h2');



user.addEventListener("input", function(char) {
    let txt = user.value;
    let newTxt = "";
    for(char of txt) { // non-chars removed except space " "

        if(char >= 'a' && char <='z' || char >= 'A' && char <='Z' || char == " ") {
            newTxt += char;
        } 
    }

    h2.innerText = `${newTxt}`;


});

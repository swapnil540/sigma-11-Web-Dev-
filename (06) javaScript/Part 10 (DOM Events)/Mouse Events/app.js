let btn = document.querySelector('button');
let btns = document.querySelectorAll('button'); // selecting all buttons

// btn.onclick = function() {
    //     alert("button was clicked");
    // }
    
function sayHello() {
    alert("Hello");
}
console.dir(btn);

// btn.onclick = sayHello; // sayHello fnx executes on btn click button 1

for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() { // triggers when mouse cursor enters the btn element range
        console.log("you entered a button");
    }
}

// Event listeners
let box = document.querySelector('.box');

box.addEventListener("click", function() {
    console.log("you Clicked box");
});

box.addEventListener("mouseenter", function() {
    console.log("you entered cursor inside box");
});


// 'this' in event listener
let box2 = document.querySelector('.box2');
let h4 = document.querySelector('h4');
let h3 = document.querySelector('h3');

function changeBackgroundColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

box2.addEventListener("click", changeBackgroundColor);
h4.addEventListener("click", changeBackgroundColor);
h3.addEventListener("click", changeBackgroundColor);
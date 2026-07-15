let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');

box1.addEventListener("click", (event) => {
    event.stopPropagation(); // to stop event bubbling
    console.log("pink box1 clicked");
    
});

box2.addEventListener("click", (event) => {
    event.stopPropagation(); // to stop event bubbling
    console.log("yellow box2 clicked");
    
});

box3.addEventListener("click", (event) => {
    event.stopPropagation(); // to stop event bubbling
    console.log("green box3 clicked");
    
});
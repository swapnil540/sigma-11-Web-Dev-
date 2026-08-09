let btn = document.querySelector('button');
let div = document.querySelector('div');

btn.addEventListener("click", function() {
    let h3 = document.querySelector('h3');

    randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;

    console.log("color updated");

    h3.innerText = randomColor;

});

function getRandomColor() {
    let r = Math.floor(Math.random() * 255); // 0 to 254
    let g = Math.floor(Math.random() * 255); // 0 to 254
    let b = Math.floor(Math.random() * 255); // 0 to 254

    let color = `rgb(${r}, ${g}, ${b})`; // backticks ``

    return color;
}
// Event listeners can be used for any HTML elements
box.addEventListener("dblclick", () => {
    alert("You double clicked over box");
});



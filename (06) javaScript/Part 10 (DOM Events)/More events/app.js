let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function() { // change event
    console.log("change event");
    console.log("value changed", " final value = ", user.value);
});

user.addEventListener("input", function() { // input event
    console.log("input event");
    console.log("value changed", " final value = ", user.value);
});

// My Text Editor Activity

let text = document.querySelector("#text");
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');


text.addEventListener("input", function() { // input event
    p2.innerHTML = `<b>input event (final value)</b> Tracks minor changes <br> ${text.value}`;
});

text.addEventListener("change", function() { // change event
    p1.innerHTML = `<b>change event (final value)</b> Tracks major changes <br>  ${text.value}`;
});
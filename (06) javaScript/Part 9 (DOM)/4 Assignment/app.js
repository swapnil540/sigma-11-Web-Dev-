let body = document.querySelector("body");
let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = "Click me";

input.setAttribute('id', 'username')
body.prepend(input);
input.insertAdjacentElement("afterend", btn);

input.setAttribute('placeholder', 'username');
btn.setAttribute('id', 'btn');

let button = document.querySelector('#btn');

button.classList.add('btn-style');

let h1 = document.createElement('h1');

h1.innerText = "DOM Practice";
h1.classList.add('heading-style');

body.insertAdjacentElement("afterbegin", h1);

let p = document.createElement('p');

p.innerHTML = "Apna College <b>Delta</b> Practice";

h1.insertAdjacentElement("afterend", p);




// i.
let newP1 = document.createElement('p');
newP1.innerText = "Hey, I'm red!";
newP1.classList.add('red');
let body = document.querySelector('body');
body.append(newP1);

// ii.
let newH3 = document.createElement('h3');
newH3.innerText = "I'm a blue h3!";
newH3.classList.add('blue');
body.append(newH3);

// iii.
let newDiv = document.createElement('div');
let newH1 = document.createElement('h1');
let newP2 = document.createElement('p');

newH1.innerText = "I am in a div";
newP2.innerText = "ME TOO!";

newDiv.append(newH1);
newDiv.append(newP2);
newDiv.classList.add('box-border', 'pinkBg');


body.append(newDiv);
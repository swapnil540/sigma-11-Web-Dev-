let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let highScore = 0;


let body = document.querySelector('body');
let h2 = document.querySelector('h2');

body.addEventListener("keypress", function() {
    if(started == false) {
          
        console.log("game started");
        started = true;

        levelUp();

    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250); // 0.1sec
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250); // 0.1sec
}

function levelUp() {
    userSeq = []; // when levelups reset user sequence, major change 
    level++;
    h2.innerText = `Level ${level}`;

    // choose random btn
    let randomIdx = Math.floor(Math.random() * 4) ;
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(`Game Sequence = ${gameSeq}`);
    btnFlash(randomBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        // console.log("same ans");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000); // to generate new seq 
        
        } else {
            // wait for nxt btn press by user 
        }
    } else {
        h2.innerHTML = `GAME OVER! your score was ${level}. <br> Press any key to restart.`;
        setHighScore();
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);

}

function flashDocumentBg() {
    body.classList.add("redBg");
    setTimeout(function() {
        body.classList.remove("redBg");
    }, 200); // 0.2 sec
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

    flashDocumentBg();
   
}

function setHighScore() {
    let h4 = document.querySelector('h4');
    if(level > highScore) {
        // blink highScore background
        blink(h4, 'goldBg');
        highScore = level;
    }
    h4.innerText = `HIGHSCORE :  ${highScore}`;
    
}

// extra Hint part
let hintTxt = document.querySelector('.hint');
let hintDescript = document.querySelector('p');
let colorCodes = document.querySelectorAll('b');

hintDescript.classList.add('hide');
for(colorCode of colorCodes) {
        colorCode.classList.add('hide');
}



function blink(elem, attr) { // takes element and attribute and applies blink effect, attribute can be class id or even an element
    let id = setInterval(function() {
        elem.classList.toggle(attr);
    }, 300);

    setTimeout(function() {
        clearInterval(id);
    }, 3000);
}

hintTxt.addEventListener("click", function() {
    blink(hintDescript, 'hide');
    for(colorCode of colorCodes) {
        blink(colorCode, 'hide');
    }
});




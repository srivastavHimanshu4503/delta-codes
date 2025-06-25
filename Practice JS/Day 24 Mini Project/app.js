let simonSequence = [];
let userSequence = [];
let colors = ["red", "orange", "green", "blue"];

let gameStart = false;
let level = -1;
let highScore = 0;
let h2 = document.querySelector('h2');

const sounds = {
    red : new Audio("sounds/red.mp3"),
    blue : new Audio("sounds/blue.mp3"),
    green : new Audio("sounds/green.mp3"),
    orange : new Audio("sounds/orange.mp3"),
    gameStart : new Audio("sounds/game-start.mp3"),
    gameEnd : new Audio("sounds/game-over.mp3"),
}

function blink(btn) {
    let color = btn.getAttribute("id");
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 150);
    sounds[color].currentTime = 0;
    sounds[color].play();
}

function levelUp() {
    userSequence = [];
    level++;

    let highScore = document.querySelector('#high-score');
    let currScore = document.querySelector('#current-score');

    currScore.innerText = `${level}`;
    if (parseInt(highScore.innerText) < level) {
        highScore.innerText = `${level}`;
    }
    h2.innerText = `Level ${level}`;
    
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = colors[randomIdx];
    let btn = document.querySelector(`.${randomColor}`);
    
    simonSequence.push(randomColor);

    blink(btn);
}

function reset() {
    simonSequence = [];
    userSequence = [];
    level = -1;
    document.querySelector('#current-score').innerText = '0';
    document.querySelector('#start-button').innerText = "Start game";
    h2.innerText = "Level 0";
    let body = document.querySelector('body');
    body.classList.add('gameOver');
    document.querySelector('.container').classList.add('disabled');
    
    setTimeout(() => {
        body.classList.remove('gameOver');
    }, 200);
}

function btnWork() {
    blink(this);
    let btnColor = this.getAttribute("id");
    userSequence.push(btnColor);

    if (checkAns(userSequence.length-1)) {
        if (userSequence.length == simonSequence.length) {
            setTimeout(() => {
                levelUp();
            }, 500);
        }
    } else {
        sounds.gameEnd.currentTime = 0;
        sounds.gameEnd.play();
        gameStart = false;
        reset();
    }
}

function checkAns(idx) {
    if (userSequence[idx] === simonSequence[idx]) {
        return true;
    }
    return false;
}

document.querySelector("#start-button").addEventListener('click', function () {
    if (!gameStart) {
        gameStart = true;
        sounds.gameStart.currentTime = 0;
        sounds.gameStart.play();
        document.querySelector('.container').classList.remove('disabled');
        setTimeout(() => {
            levelUp();
        }, 2500);
    }
});

let btns = document.querySelectorAll('.btn');
for(let btn of btns) {
    btn.addEventListener('click', btnWork);
}
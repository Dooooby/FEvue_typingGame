const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")
const GAME_TIME = 10;
const API_URL = "https://random-word-api.herokuapp.com/word?number=50"

let words = ["banana",'key','car','javascript','scalper'];
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;


init()
// function init() {
//     const res = fetch(API_URL).then(res => res.json()).then((data)=> words = data);}

// async await 
async function init() {
    const res = await fetch(API_URL);
    const data = await res.json();
    words = data.filter(item =>item.length < 8)
    isReady = true;
    console.log(words)
}


wordInput.addEventListener("input",e=>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if (typedText.toUpperCase() === currentText.toUpperCase() &&isReady) {
        addScore()
        setNewWord()
    }
})

//시간 카운트다운
function countDown() {
    console.log(time)
    time=time -1;
    timeDisplay.innerText = time;
    if(time === 0) {
        gameover();
    }
}

//게임종료
function gameover() {
    console.log("게임오버")
    isPlaying = false;
    clearInterval(timeInterval)
    timeInterval = null;
    messageDisplay.innerText = "GAME OVER!!"
    score = 0;
}

function setNewWord() {
    time = GAME_TIME;
    wordInput.value="";
    messageDisplay.innerText = "Now Playing!!"
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex]

    if(!isPlaying) {
        timeInterval = setInterval(countDown,1000)
        isPlaying = true;
    }
}



function addScore() {
    score = score + 1;
    // console.log(score)
    scoreDisplay.innerText = score
}






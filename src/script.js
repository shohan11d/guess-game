let randomNum = Math.trunc(Math.random() * 10) + 1;
console.log(randomNum);

// HTML Elements

const inputEl = document.querySelector(".input");
const checkBtn = document.querySelector(".check");
const msgEl = document.querySelector(".msg");
const questionEl = document.querySelector(".question");
const bodyEl = document.querySelector("body");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const againEl = document.querySelector(".again");
const rangeEl = document.querySelector(".range");

let scoreValue = 10;
let hqValue = 0;

// Functions
const showMsg = function (msg) {
  msgEl.textContent = `${msg}`;
};

const loseGame = function () {
  showMsg(" You Lost the game! 🥺");
  scoreEl.textContent = 0;
  checkBtn.disabled = true;
  inputEl.value = "";
};

const calcHighScore = function () {
  if (scoreValue > hqValue) {
    hqValue = scoreValue;
    highscoreEl.textContent = hqValue;
  }
};

// const again = function () {
//   showMsg("Start Guessing...");
//   scoreEl.textContent = 0;
//   checkBtn.disabled = false;
//   rangeEl.style.border = "none";
//   randomNum = Math.trunc(Math.random() * 10) + 1;
// };

checkBtn.addEventListener("click", function () {
  const inputNum = Number(inputEl.value);
  if (inputNum > 10 || inputNum < 0) {
    rangeEl.style.border = "2px solid white";
  } else {
    rangeEl.style.border = "none";
  }
  if (randomNum === inputNum) {
    showMsg("Correct! 🛎️");
    questionEl.textContent = inputNum;
    bodyEl.style.backgroundColor = "green";
    checkBtn.disabled = true;
    calcHighScore();
  }

  if (inputNum > randomNum) {
    showMsg("Too High! 📈");
    scoreValue--;
    scoreEl.textContent = scoreValue;
  }
  if (inputNum < randomNum) {
    showMsg("Too Low! 📉");
    scoreValue--;
    scoreEl.textContent = scoreValue;
  }
  if (scoreValue <= 0) {
    loseGame();
  }
});

againEl.addEventListener("click", function () {
  showMsg("Start Guessing...");
  scoreEl.textContent = 0;
  checkBtn.disabled = false;
  questionEl.textContent = "?";
  bodyEl.style.backgroundColor = "#202020";
  inputEl.value = "";
  scoreValue = 10;
  randomNum = 3;

  rangeEl.style.border = "none";
  randomNum = Math.trunc(Math.random() * 10) + 1;
});


// VARIABLES
// BUTTONS
const startGameRock = document.getElementById("startGameRock");
const startGamePaper = document.getElementById("startGamePaper");
const startGameScissors = document.getElementById("startGameScissors");

// TEXTS
const playerText = document.getElementById("playerText");
const aiText = document.getElementById("aiText");
const result = document.getElementById("result");

// SCORE HISTORY
const wonScoreText = document.getElementById("wonScoreText");
const lostScoreText = document.getElementById("lostScoreText");
const drawnScoreText = document.getElementById("drawnScoreText");

// Data
let aiChoose;
let playerChoose;

// Arrays
let getWonScore = [],
  getLostScore = [],
  getDrawnScore = [];

//ONLOAD (Loading the cookies on start)
loadCookie();

// Start rockgame on button click and calls functions
startGameRock.addEventListener("click", function() {
  playerChoose = "Rock";
  getRandomNumber();
});

// Start papergame on button click and calls functions
startGamePaper.addEventListener("click", function() {
  playerChoose = "Paper";
  getRandomNumber();
});

// Start scissorsgame on button click and calls functions
startGameScissors.addEventListener("click", function() {
  playerChoose = "Scissors";
  getRandomNumber();
});

// PROCESSES

// Generating random rock, paper or scissors
function getRandomNumber() {
  aiRoll = Math.floor(Math.random() * 3) + 1;
  if (aiRoll === 1) {
    aiChoose = "Rock";
  }
  else if (aiRoll === 2) {
    aiChoose = "Paper";
  }
  else {
    aiChoose = "Scissors";
  }
  showDecision();
  calculateResult();
}

// VISUALS
function showDecision() {
  playerText.innerHTML = 'Player choose: ' + playerChoose;
  aiText.innerHTML = 'AI choose: ' + aiChoose;
}

// Calculates the result of the game and then calls function saveCookie
function calculateResult() {
  if (playerChoose === aiChoose) {
    drawnScore++;
    result.style.color = 'yellow';
    result.innerHTML = 'Result: DRAW';
  } else if ((playerChoose === "Rock") && (aiChoose === "Scissors")) {
    result.style.color = 'green';
    wonScore++;
    result.innerHTML = "Result: WIN";
  } else if ((playerChoose === "Paper") && (aiChoose === "Rock")) {
    result.style.color = 'green';
    wonScore++;
    result.innerHTML = "Result: WIN";
  } else if ((playerChoose === "Scissors") && (aiChoose === "Paper")) {
    result.style.color = 'green';
    wonScore++;
    result.innerHTML = "Result: WIN";
  } else if ((playerChoose === "Paper") && (aiChoose === "Scissors")) {
    result.style.color = 'red';
    lostScore++;
    result.innerHTML = "Result: LOSE";
  } else if ((playerChoose === "Scissors") && (aiChoose === "Rock")) {
    result.style.color = 'red';
    lostScore++;
    result.innerHTML = "Result: LOSE";
  } else if ((playerChoose === "Rock") && (aiChoose === "Paper")) {
    result.style.color = 'red';
    lostScore++;
    result.innerHTML = "Result: LOSE";
  }
  saveAsCookie();
}

// COOKIES PART
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0; // Sets the value to zero on the cookie
}

// Saves the cookies and after calls function loadCookie
function saveAsCookie() {
  document.cookie = "wonScore=" + wonScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "lostScore=" + lostScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "drawnScore=" + drawnScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  loadCookie();
}

// Fetching information from the cookies and displays the score
function loadCookie() {
  wonScore = getCookie("wonScore");
  lostScore = getCookie("lostScore");
  drawnScore = getCookie("drawnScore");

  if (getWonScore != null) {
    wonScoreText.innerHTML = 'Won: ' + wonScore;
  }

  if (getLostScore != null) {
    lostScoreText.innerHTML = 'Lost: ' + lostScore;
  }

  if (getDrawnScore != null) {
    drawnScoreText.innerHTML = 'Drawn: ' + drawnScore;
  }
}

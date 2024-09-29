const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");
const yourChoice = document.getElementById("yourChoice");
const aiChoice = document.getElementById("aiChoice");
const winResult = document.getElementById("winResult");
const drawnResult = document.getElementById("drawnResult");
const lostResult = document.getElementById("lostResult");
const cookiesPast = document.getElementById("cookiesPast");


let won = 0;
let drawn = 0;
let lost = 0;
let rock, scissors, paper = false;

let aiRock = false;
let aiPaper = false;
let aiScissors = false;




function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null; // Returnera null om cookien inte finns
}

let winScore = getCookie("winScore");
let totalWon;
if (winScore !== null && winScore !== "") {
  totalWon = parseInt(winScore) + won;
} else {
  totalWon = won;
}

let drawScore = getCookie("drawScore");

let totalDraw;
if (drawScore !== null && drawScore !== "") {
  totalDraw = parseInt(drawScore) + drawn;
} else {
  totalDraw = drawn;
}

let loseScore = getCookie("loseScore");

let totalLose;
if (loseScore !== null && loseScore !== "") {
  totalLose = parseInt(loseScore) + lost;
} else {
  totalLose = lost;
}



winResult.innerHTML = "Won: " + totalWon;
lostResult.innerHTML = "Lost: " + totalLose;
drawnResult.innerHTML = "Drawn: " + totalDraw;

function saveAsCookie() {
  let winScore = getCookie("winScore");

  let totalWon;
  if (winScore !== null && winScore !== "") {
    totalWon = parseInt(winScore) + won;
  } else {
    totalWon = won;
  }

  document.cookie = "winScore=" + totalWon + ";expires=Thu, 18 Dec 2025 12:00:00 UTC;";

  winResult.innerHTML = "Won: " + totalWon;

  // Nollställ nuvarande antal vinster för nästa omgång
  won = 0;
}

function saveAsCookie2() {
  let drawScore = getCookie("drawScore");

  let totalDraw;
  if (drawScore !== null && drawScore !== "") {
    totalDraw = parseInt(drawScore) + drawn;
  } else {
    totalDraw = drawn;
  }

  document.cookie = "drawScore=" + totalDraw + ";expires=Thu, 18 Dec 2025 12:00:00 UTC;";

  drawnResult.innerHTML = "Draw: " + totalDraw;

  // Nollställ nuvarande antal vinster för nästa omgång
  drawn = 0;
}

function saveAsCookie3() {
  let loseScore = getCookie("loseScore");

  let totalLose;
  if (loseScore !== null && loseScore !== "") {
    totalLose = parseInt(loseScore) + lost;
  } else {
    totalLose = lost;
  }

  document.cookie = "loseScore=" + totalLose + ";expires=Thu, 18 Dec 2025 12:00:00 UTC;";

  lostResult.innerHTML = "Lost: " + totalLose;

  // Nollställ nuvarande antal vinster för nästa omgång
  lost = 0;
}

function aiCheck() {
  let randomAI = Math.floor(Math.random() * 3 + 1);

  if (randomAI === 1) {
    aiRock = true;
    calcResult();
    aiRock = false;
  } else if (randomAI === 2) {
    aiPaper = true;
    calcResult();
    aiPaper = false;
  } else if (randomAI === 3) {
    aiScissors = true;
    calcResult();
    aiScissors = false;
  } else {
    console.log('bug');
  }
}

//
rockButton.addEventListener("click", (e) => {
  ;
  rock = true;
  aiCheck();
  rock = false;
})

paperButton.addEventListener("click", (e) => {
  ;
  paper = true;
  aiCheck();
  paper = false;
})

scissorsButton.addEventListener("click", (e) => {
  ;
  scissors = true;
  aiCheck();
  scissors = false;
})

let wonText = 'Result: Won';
let drawText = 'Result: Draw';
let loseText = 'Result: Lost';

let yourRock = 'Your choice: Rock';
let AiChoiceRock = 'AI choice: Rock';

let yourPaper = 'Your choice: Paper';
let AiChoicePaper = 'AI choice: Paper';

let yourScissors = 'Your choice: Scissors';
let AiChoiceScissors = 'AI choice: Scissors';

function calcResult() {
  if (rock === true && aiRock === true) {
    result.innerHTML = drawText;
    result.style.color = 'yellow';
    yourChoice.innerHTML = yourRock;
    aiChoice.innerHTML = AiChoiceRock;
    drawn++;
    saveAsCookie2();
  } else if (rock === true && aiScissors === true) {
    result.innerHTML = wonText;
    result.style.color = 'green';
    yourChoice.innerHTML = yourRock;
    aiChoice.innerHTML = AiChoiceScissors;
    won++;
    saveAsCookie();
  } else if (rock === true && aiPaper === true) {
    result.innerHTML = loseText;
    result.style.color = 'red';
    yourChoice.innerHTML = yourRock;
    aiChoice.innerHTML = AiChoicePaper;
    lost++;
    saveAsCookie3();
  } else if (paper === true && aiPaper === true) {
    result.innerHTML = drawText;
    result.style.color = 'yellow';
    yourChoice.innerHTML = yourPaper;
    aiChoice.innerHTML = AiChoicePaper;
    drawn++;
    saveAsCookie2();
  } else if (paper === true && aiScissors === true) {
    result.innerHTML = loseText;
    result.style.color = 'red';
    yourChoice.innerHTML = yourPaper;
    aiChoice.innerHTML = AiChoiceScissors;
    lost++;
    saveAsCookie3();
  } else if (paper === true && aiRock === true) {
    result.innerHTML = wonText;
    result.style.color = 'green';
    yourChoice.innerHTML = yourPaper;
    aiChoice.innerHTML = AiChoiceRock;
    won++;
    saveAsCookie();
  } else if (scissors === true && aiScissors === true) {
    result.innerHTML = drawText;
    result.style.color = 'yellow';
    yourChoice.innerHTML = yourScissors;
    aiChoice.innerHTML = AiChoiceScissors;
    drawn++;
    saveAsCookie2();
  } else if (scissors === true && aiPaper === true) {
    result.innerHTML = wonText;
    result.style.color = 'green';
    yourChoice.innerHTML = yourScissors;
    aiChoice.innerHTML = AiChoicePaper;
    won++;
    saveAsCookie();
  } else if (scissors === true && aiRock === true) {
    result.innerHTML = loseText;
    result.style.color = 'red';
    yourChoice.innerHTML = yourScissors;
    aiChoice.innerHTML = AiChoiceRock;
    lost++;
    saveAsCookie3();
  } else {
    result.innerHTML = 'Inget syntax';
  }
}

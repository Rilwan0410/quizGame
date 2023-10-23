let timer = 75;
let finalScore = document.querySelector(".final-score");
let results = document.querySelector(".end-result");
let endGameText = document.querySelector(".end-game-text");
let startTest = false;
let highScores = document.querySelector(".high-scores");
let highScoresContainer = document.querySelector(".high-scores-container");
let count = document.querySelector(".timer .count");
let submitButton = document.querySelector(".submit");
let initialsEntered = document.querySelector(".initials-input");
// -------------------
let startQuiz = document.querySelector(".start-quiz-button");
let gamePrompt = document.querySelector(".start-game");
let goBackButton = document.querySelector(".go-back");
let clearScoresButton = document.querySelector(".clear-scores");
let viewScores = document.querySelector(".high-scores-button");
// -------------------

count.innerText = timer;

submitButton.addEventListener("click", submit);
goBackButton.addEventListener("click", goBack);
startQuiz.addEventListener("click", startGame);
clearScoresButton.addEventListener("click", () => {
  localStorage.removeItem("_HIGHSCORES");
  addScore([]);
});
viewScores.addEventListener("click", () => {
  if (!startTest) {
    highScoresContainer.classList.remove("hidden");
    gamePrompt.classList.add("hidden");
  } else {
    alert("Cannot check scores while quiz is in session");
    return;
  }
});

if (startTest) {
}
setInterval(() => {
  if (startTest) {
    if (timer <= 0) return;
    timer--;
    count.innerText = timer;
  }
}, 1000);

let questions = [
  {
    questionNumber: 1,
    question: "Which keyword is used to instantiate a variable in JavaScript?",
    choices: ["var", "this", "function()", "console.log()"],
    correctAnswer: "var",
  },
  {
    questionNumber: 2,
    question:
      "Which language is responsible for making the webpage interactive/dynamic?",
    choices: ["Java", "HTML", "CSS", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    questionNumber: 3,
    question: "What does API stand for?",
    choices: [
      "Anonymous Prompt Import",
      "Application Programming Interface",
      "All People Intergrate",
      "All Program Included",
    ],
    correctAnswer: "Application Programming Interface",
  },
  {
    questionNumber: 4,
    question:
      "Which of the following is the correct file extension for a JavaScript file?",
    choices: [".javascript", ".js", ".jsx", ".script"],
    correctAnswer: ".js",
  },
  {
    questionNumber: 5,
    question: "Which tool in JavaScript is used to debug your code?",
    choices: ["console.log", "function()", "Live Server", "Math.floor"],
    correctAnswer: "console.log",
  },
];

//===========================================================================================================================================
//===========================================================================================================================================

function checkCorrect(answer, validation, el) {
  if (answer === validation) {
    validate(el, "correct");
  } else if (answer !== validation) {
    validate(el, "incorrect");
    timer -= 10;
    count.innerText = timer;
  }
}

function validate(valid, result) {
  valid.querySelector(`.${result}`).classList.add("show");
  setTimeout(() => {
    valid.classList.add("hidden");
    valid.dataset.checked = true;
    valid.querySelector(`.${result}`).classList.remove("show");
    valid
      .closest(".questions")
      .querySelectorAll(".question")
      .forEach((each) => {
        if (
          each.dataset.question ===
          (Number(valid.dataset.question) + 1).toString()
        ) {
          each.classList.remove("hidden");
          each.dataset.checked = true;
        }
      });
    if (valid.dataset.question === "5") {
      clearInterval();
      startTest = false;
      if (timer > 35) {
        endGameText.innerText = "Nicely Done 😁";
      } else {
        endGameText.innerText = "Better Luck Next Time 🙃";
      }
      finalScore.innerText = timer;
      results.classList.add("show");
    }
  }, 2000);
}

function initGame() {
  startTest = true;

  if (startTest) {
    const questionContainer = document.querySelector(".questions");

    const q1 = document.createElement("div");
    const q2 = document.createElement("div");
    const q3 = document.createElement("div");
    const q4 = document.createElement("div");
    const q5 = document.createElement("div");

    q1.innerHTML = `
  <div class="question " data-question="${questions[0].questionNumber}" data-checked=false>
          <p class="question-text">
            <span class="question-number">${questions[0].questionNumber}.</span> ${questions[0].question}
          </p>
          <ul class="answers">
            <div class="choice-container">
              <span class="list-style">A</span>
              <li class="choice">${questions[0].choices[0]}</li>
            </div>
            <div class="choice-container">
              <span class="list-style">B</span>
              <li class="choice">${questions[0].choices[1]}</li>
            </div>
            <div class="choice-container">
              <span class="list-style">C</span>
              <li class="choice">${questions[0].choices[2]}</li>
            </div>
            <div class="choice-container">
              <span class="list-style">D</span>
              <li class="choice">${questions[0].choices[3]}</li>
            </div>
          </ul>
  
          <div class="incorrect">Wrong ❌</div>
          <div class="correct">Correct ✅</div>
        </div>
  `;
    q2.innerHTML = `
  <div class="question hidden" data-question="${questions[1].questionNumber}"  data-checked=false>
  <p class="question-text">
    <span class="question-number">${questions[1].questionNumber}.</span> ${questions[1].question}
  </p>
  <ul class="answers">
    <div class="choice-container">
      <span class="list-style">A</span>
      <li class="choice">${questions[1].choices[0]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">B</span>
      <li class="choice">${questions[1].choices[1]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">C</span>
      <li class="choice">${questions[1].choices[2]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">D</span>
      <li class="choice">${questions[1].choices[3]}</li>
    </div>
  </ul>
  
  <div class="incorrect">Wrong ❌</div>
  <div class="correct">Correct ✅</div>
  </div>`;
    q3.innerHTML = `
  <div class="question hidden" data-question="${questions[2].questionNumber}" data-checked=false>
  <p class="question-text">
    <span class="question-number">${questions[2].questionNumber}.</span> ${questions[2].question}
  </p>
  <ul class="answers">
    <div class="choice-container">
      <span class="list-style">A</span>
      <li class="choice">${questions[2].choices[0]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">B</span>
      <li class="choice">${questions[2].choices[1]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">C</span>
      <li class="choice">${questions[2].choices[2]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">D</span>
      <li class="choice">${questions[2].choices[3]}</li>
    </div>
  </ul>
  
  <div class="incorrect">Wrong ❌</div>
  <div class="correct">Correct ✅</div>
  </div>`;

    q4.innerHTML = `
  <div class="question hidden" data-question="${questions[3].questionNumber}"  data-checked=false>
  <p class="question-text">
    <span class="question-number">${questions[3].questionNumber}.</span> ${questions[3].question}
  </p>
  <ul class="answers">
    <div class="choice-container">
      <span class="list-style">A</span>
      <li class="choice">${questions[3].choices[0]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">B</span>
      <li class="choice">${questions[3].choices[1]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">C</span>
      <li class="choice">${questions[3].choices[2]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">D</span>
      <li class="choice">${questions[3].choices[3]}</li>
    </div>
  </ul>
  
  <div class="incorrect">Wrong ❌</div>
  <div class="correct">Correct ✅</div>
  </div>`;
    q5.innerHTML = `
  <div class="question hidden" data-question="${questions[4].questionNumber}"  data-checked=false>
  <p class="question-text">
    <span class="question-number">${questions[4].questionNumber}.</span> ${questions[4].question}
  </p>
  <ul class="answers">
    <div class="choice-container">
      <span class="list-style">A</span>
      <li class="choice">${questions[4].choices[0]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">B</span>
      <li class="choice">${questions[4].choices[1]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">C</span>
      <li class="choice">${questions[4].choices[2]}</li>
    </div>
    <div class="choice-container">
      <span class="list-style">D</span>
      <li class="choice">${questions[4].choices[3]}</li>
    </div>
  </ul>
  
  <div class="incorrect">Wrong ❌</div>
  <div class="correct">Correct ✅</div>
  </div>`;

    questionContainer.append(q1);
    questionContainer.append(q2);
    questionContainer.append(q3);
    questionContainer.append(q4);
    questionContainer.append(q5);

    let question = document.querySelectorAll(".question");
    question.forEach((q) => {
      q.addEventListener("click", (e) => {
        if (!e.target.classList.contains("list-style")) {
          return;
        } else {
          checkCorrect(
            e.target.closest(".choice-container").querySelector(".choice")
              .innerText,
            questions[Number(q.dataset.question - 1)].correctAnswer,
            q
          );
        }
      });
    });
  }
}

function saveScore(name, score) {
  if (localStorage.getItem("_HIGHSCORES") == null) {
    let arr = [];
    arr.push({ initials: name, score: score });

    saveToLocal(arr);
    addScore(arr);
  } else if (localStorage.getItem("_HIGHSCORES")) {
    let arr = JSON.parse(localStorage.getItem("_HIGHSCORES"));
    arr.push({ initials: name, score });
    saveToLocal(arr);
    addScore(arr);
  }
}

function addScore(arr) {
  if (arr.length > 0) {
    highScores.querySelectorAll(".score").forEach((child) => {
      child.remove(highScores);
    });

    arr.forEach((score) => {
      let newScore = document.createElement("li");
      newScore.classList.add("score");
      newScore.innerHTML = ` <span>${score.initials} - </span> <span class="score-number">${score.score}</span>`;
      highScores.appendChild(newScore);
    });
  } else {
    highScores.querySelectorAll(".score").forEach((child) => {
      child.remove(highScores);
    });
  }
}

function saveToLocal(toSave) {
  localStorage.setItem("_HIGHSCORES", JSON.stringify(toSave));
}

function checkLocal(arr) {
  let getFromLocal = localStorage.getItem("_HIGHSCORES");
  if (getFromLocal != null) {
    let data = JSON.parse(getFromLocal);
    arr.push(data);
  } else return;

  return arr;
}

function submit() {
  const questionContainer = document.querySelector(".questions");
  saveScore(initialsEntered.value.toUpperCase(), timer);

  results.classList.remove("show");
  highScoresContainer.classList.remove("hidden");

  questionContainer.querySelectorAll(".question").forEach((child) => {
    child.remove(questionContainer);
  });

  timer = 75;
  count.innerText = timer;
  initialsEntered.value = "";
}

function goBack() {
  gamePrompt.classList.remove("hidden");
  highScoresContainer.classList.add("hidden");
}

function startGame() {
  gamePrompt.classList.add("hidden");
  initGame();
}

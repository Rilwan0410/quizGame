let timer = 75;
let finalScore = document.querySelector(".final-score");
let results = document.querySelector(".end-result");
let endGameText = document.querySelector(".end-game-text");
let startTest = false;
let count = document.querySelector(".timer .count");

if (startTest) {
  let time = setInterval(() => {
    if (timer <= 0) return;
    timer--;
    count.innerText = timer;
  }, 1000);
}

count.innerText = timer;
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

// questionContainer.append(q1);
// questionContainer.append(q2);
// questionContainer.append(q3);
// questionContainer.append(q4);
// questionContainer.append(q5);
let question = document.querySelectorAll(".question");
console.log(questionContainer);

//=========================================================================================================================================

// setInterval(()=> {
//     timer--
//     count.innerText = timer
//     }, 1000)

question.forEach((q) => {
  q.addEventListener("click", (e) => {
    console.log(q);
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

function checkCorrect(answer, validation, el) {
  if (answer === validation) {
    validate(el, "correct");
    console.log("correct");
  } else if (answer !== validation) {
    validate(el, "incorrect");
    timer -= 10;
    count.innerText = timer;
    console.log("incorrect");
  }
}
//=========================================================================================================================================

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
          //  let check = Array.from(questionContainer.querySvalidectorAll(".question")).every(f => {
          //     return f.dataset.checked === "true"
          // })
          // console.log(check)
          // if(questionContainer.querySvalidectorAll)
        }
      });
    if (valid.dataset.question === "5") {
      clearInterval(time);
      console.log("test over!");
      if (timer > 45) {
        endGameText.innerText = "Nicely Done 😁";
      } else {
        endGameText.innerText = "Better Luck Next Time 🙃";
      }
      finalScore.innerText = timer;
      results.classList.add("show");
    }
  }, 2000);
}

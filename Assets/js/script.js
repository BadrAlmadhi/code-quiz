// select everything we need from index.html
var startQuizBtn = document.querySelector("#start");
var timerEl = document.querySelector(".time");
var quizFirstPage = document.querySelector("#quiz-starter");
var quizQuestions = document.querySelector("#quiz-questions");
var mainQuestion = document.querySelector("#question");
var choices = document.querySelector("#choices");
var final = document.querySelector("#final-page");
var score = document.querySelector(".heigh-score");
var positiveResult = document.querySelector("#answerResult");

var questionsIndex = 0;

// The questions list

var questionsList = [
  {
    questions: "Inside which HTML element do we put the JavaScript?",
    choices: ["A. <javascript>", "B. <scripting>", "C. <js>", "D. <script>"],
    correctAnswer: "D. <script>",
  },
  {
    questions: "Where is the correct place to insert a JavaScript?",
    choices: [
      "A. Both <head> and <body>",
      "B .<head>",
      "C .<script>",
      "D .<h1>",
    ],
    correctAnswer: "A. Both <head> and <body>",
  },
  {
    questions: "How to make sure that JavaScript in connected with index.html?",
    choices: [
      "A.test with console.log",
      "B.type anything in JavaScript",
      "C.assign variable",
      "D.write a function",
    ],
    correctAnswer: "A.test with console.log",
  },
  {
    questions: "How do you create a function in JavaScript?",
    choices: [
      "A.function:myFunction()",
      "B.function = myFunction()",
      "C.function myFunction",
      "D.write a function",
    ],
    correctAnswer: "C.function myFunction",
  },
  {
    questions: "How do you call a function named 'myFunction'?",
    choices: [
      "A.call myFunction",
      "B.function = myFunction()",
      "C.myFunction()",
      "D.call function myFunction",
    ],
    correctAnswer: "C.myFunction()",
  },
];

// Add a timer of the quiz
// Timer

// Assign timer variables
// Set time at 75
var time = 75;
var timerT = true;
var timerF = false;

// assign event listener
// after click time start
startQuizBtn.addEventListener("click", function () {
  var countdownInterval = setInterval(setCountdownTimer, 1000);
  // timer function
  function setCountdownTimer() {
    if (timerT) time--;
    if (time <= 0) {
      // do not forget to make a function for this
      end_quiz();
      time = 0;
    }
    document.getElementById("time").innerHTML = time;
  }
  return;
});

// After clicking start Quiz it display the quiz questions, time, and view score.
startQuizBtn.addEventListener("click", function () {
  quizQuestions.style.display = "block";
  quizFirstPage.style.display = "none";
  timerEl.style.display = "block";
  score.style.display = "block";
  //setCountdownTimer();
  //setQuizQuestions();
  showQuestion();
  // Create a functions for the quiz questions to display after start quiz button is clicked.
});

function showQuestion() {
  if (questionsIndex === questionsList.length) {
    end_quiz();
  } else {
    //choices.replaceChildren();
    choices.innerHTML = "";
    var currentQuestion = questionsList[questionsIndex];
    var correctAnswer = currentQuestion.correctAnswer;
    //console.log(currentQuestion);
    mainQuestion.innerText = currentQuestion.questions;
    var questionChoices = currentQuestion.choices;
    //console.log(questionChoices);
    for (var i = 0; i < questionChoices.length; i++) {
      var choiceText = questionChoices[i];
      var divEl = document.createElement("div");
      var btnEl = document.createElement("button");
      btnEl.textContent = choiceText;

      btnEl.addEventListener("click", function (event) {
        //console.log(correctAnswer);
        //console.log(choiceText);
        //console.log(event.target.textContent);
        
        if (correctAnswer === event.target.textContent) {
          console.log("Correct");
        } else {
          console.log("Wrong");
        }
        questionsIndex++;
        //console.log(questionsIndex);
        showQuestion();
      });

      divEl.append(btnEl);
      choices.append(divEl);
    }
  }
}

function end_quiz() {
  final.style.display = "block";
  quizQuestions.style.display = "none";
}

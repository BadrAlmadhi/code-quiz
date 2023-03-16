// select everything we need from index.html
var startQuizBtn = document.querySelector("#start");
var timerEl = document.querySelector(".time");
var quizFirstPage = document.querySelector("#quiz-starter");
var quizQuestions = document.querySelector("#quiz-questions");
var mainQuestion = document.querySelector("#question");
var choices = document.querySelector("#choices");
var choiceA = document.querySelector("#answerChoiceA");
var choiceB = document.querySelector("#answerChoiceB");
var choiceC = document.querySelector("#answerChoiceC");
var choiceD = document.querySelector("#answerChoiceD");
var final = document.querySelector("#final-page");
var score = document.querySelector(".heigh-score");

// The questions list

var questionsList = [
  {
    questions: "Inside which HTML element do we put the JavaScript?",
    choices: ["A.<javascript>", "B.<scripting>", "C.<js>", "D.<script>"],
    correctAnswer: "<script>",
  },
  {
    questions: "Where is the correct place to insert a JavaScript?",
    choices: ["A.Both <head> and <body>", "B.<head>", "C.<script>", "D.<h1>"],
    correctAnswer: "Both <head> and <body",
  },
  {
    questions: "How to make sure that JavaScript in connected with index.html?",
    choices: [
      "A.test with console.log",
      "B.type anything in JavaScript",
      "C.assign variable",
      "D.write a function",
    ],
    correctAnswer: "test with console.log",
  },
  {
    questions: "How do you create a function in JavaScript?",
    choices: [
      "A.function:myFunction()",
      "B.function = myFunction()",
      "C.function myFunction",
      "D.write a function",
    ],
    correctAnswer: "function myFunction",
  },
  {
    questions: "How do you call a function named 'myFunction'?",
    choices: [
      "A.call myFunction",
      "B.function = myFunction()",
      "C.myFunction()",
      "D.call function myFunction",
    ],
    correctAnswer: "myFunction()",
  },
];

// Add a timer of the quiz
// Timer

// Assign timer variables
// Set time at 75
var time = 75;
var timerT = true;
var timerF = false;

startQuizBtn.addEventListener("click", function () {
  var countdownInterval = setInterval(setCountdownTimer, 1000);
  // timer function
  function setCountdownTimer() {
    if (timerT) time--;
    if (time <= 0) {
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
  setCountdownTimer();
  setQuizQuestions();
  // Create a functions for the quiz questions to display after start quiz button is clicked.
});

// Questions

function setQuizQuestions() {
  questionsList.questions;
}

//GIVEN I am taking a code quiz

//Step 1
//WHEN I the start button
//THEN a timer starts and I am presented with a question

// First we need to create element using .creatElement
var body = document.body;
var h1Element = document.createElement("h1");
var quizInfo = document.createElement("p");
var starter = document.createElement("button");

var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");

li1.textContent = "Keep in mind, this Quiz has a time limit";
li2.textContent = "Wrong answers will effect your score time";
// Assign text
h1Element.textContent = "Coding Quiz Challenge";
quizInfo.textContent =
  "Please answer the following code-related questions withing the time limit.";
starter.textContent = "Start Quiz";

// Apply changes to browser
body.appendChild(h1Element);
body.appendChild(quizInfo);
body.appendChild(li1);
body.appendChild(li2);
body.appendChild(starter);

// Styling of elements
li1.setAttribute(
  "style",
  "font-family: Sans-serif;  list-style-type: none; margin: 10px;"
);

li2.setAttribute(
  "style",
  "font-family: Sans-serif;  list-style-type: none; margin: 10px;"
);

h1Element.setAttribute(
  "style",
  "text-align: center; margin: auto; padding-top: 10%; font-family: Sans-serif;"
);
quizInfo.setAttribute(
  "style",
  "text-align: center; padding-bottom: 20px; font-family: Sans-serif;"
);
starter.setAttribute(
  "style",
  "background: #8a2be2; font-size:20px; color: white; border-radius: 10px; border: none; font-family: Sans-serif; margin-top: 20px;"
);

// Questions list
var quizQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "<js>",
    choiceB: "<scripting>",
    choiceC: "javascript>",
    choiceD: "<script>",
    correctAnswer: "d",
  },
  {
    question: "What dose && stand for?",
    choiceA: "Is it to add more element",
    choiceB: "Is it used as and ",
    choiceC: "Is it a logical conjunction operator",
    choiceD: "Is it division tool",
    correctAnswer: "c",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choiceA: "The <head> section",
    choiceB: "The <body> section",
    choiceC: "both the <head> section and the <body> section",
    correctAnswer: "c",
  },
  {
    question: "What dose HTML stand for?",
    choiceA: "Hypertext Markup Language",
    choiceB: "Cascading Style Sheets",
    choiceC: "Structured Query Language",
    choiceD: "None of the above",
    correctAnswer: "a",
  },
];

var questionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

//Step 2
//WHEN I answer a question
//THEN I am presented with another question
starter.addEventListener("click", function(event)) {

};
//Step 3
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

//Step 4
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//Step 5
//WHEN the game is over
//THEN I can save my initials and my score

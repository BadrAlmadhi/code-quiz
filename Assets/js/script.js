//GIVEN I am taking a code quiz

//Step 1
//WHEN I the start button
//THEN a timer starts and I am presented with a question

// Fisrt we need to creat element using .creatElement
var body = document.body;
var h1Element = document.createElement("h1");
var quizinfo = document.createElement("p");
var starter = document.createElement("button");

// Assign text
h1Element.textContent = "Coding Quiz Challenge";
quizinfo.textContent =
  "Please inswer the folloing code-related questions withing the time limit.";
starter.textContent = "Start Quiz";

// Apply changes to browser
body.appendChild(h1Element);
body.appendChild(quizinfo);
body.appendChild(starter);

h1Element.setAttribute(
  "style",
  "text-align: center; margin: auto; padding-top: 10%; font-family: Sans-serif;"
);
quizinfo.setAttribute(
  "style",
  "text-align: center; padding-bottom: 20px; font-family: Sans-serif;"
);
starter.setAttribute(
  "style",
  "background: #8a2be2; font-size:20px; color: white; border-radius: 10px; border: none; font-family: Sans-serif; margin: center; "
);

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
    choiceD: "Is it divistion tool",
    correctAnswer: "c",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choiceA: "The <head> section",
    choiceB: "The <body> section",
    choiceC: "both the <head> section and the <body> section",
    correctAnswer: "c",
  },
];

//Step 2
//WHEN I answer a question
//THEN I am presented with another question

//Spet 3
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

//Step 4
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//Step 5
//WHEN the game is over
//THEN I can save my initials and my score

//GIVEN I am taking a code quiz

//Step 1
//WHEN I the start button
//THEN a timer starts and I am presented with a question

// First we need to create element using .creatElement

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

//Step 2
//WHEN I answer a question
//THEN I am presented with another question

//Step 3
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

//Step 4
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//Step 5
//WHEN the game is over
//THEN I can save my initials and my score

const readlineSync = require("readline-sync");
score=0;

var userData = readlineSync.question("what is your name ");
console.log("Welocome "+userData +" To the Quiz!!");
console.log("------------------------");
// console.log("Your Questions are")

function quiz(question,answer){
  var quizq = readlineSync.question(question);
  console.log(quizq)
  
  if(quizq===answer){
    console.log("right!");
    score = score+1;
  }else{
    console.log("Wrong");
    score = score-1;
  }
  console.log("------------");
}

var questions=[{
  question: "1. What is the HTML tag under which one can write the JavaScript code? \n A) <javascript \n B) <scripted> \nC) <script>\nD) <js> \n",
  answer:"<script>"
},{
  question: " Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript? \n  A. alertbox(“GeeksforGeeks”); \n B. msg(“GeeksforGeeks”); \nC. msgbox(“GeeksforGeeks”); \n D. alert(“GeeksforGeeks”); \n",
  answer:"alert(“GeeksforGeeks”)"
}]

for(var i=0;i<questions.length;i++){
var currentquestion = questions[i];
  quiz(currentquestion.question,currentquestion.answer)
}
console.log("your score "+score)
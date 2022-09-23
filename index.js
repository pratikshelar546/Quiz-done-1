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
  question: "1. What is the HTML tag under which one can write the JavaScript code? \n A) <javascript> \n B) <scripted> \nC) <script>\nD) <js> \n",
  answer:"<script>"
},{
  question: "<input> is  \n  A.an format tag \n B.an empty tag \n C. all of the above \n D.none of the above \n",
  answer:"an empty tag"
},{
  question: "HTML stand for  \n A.HyperText Markup Language \n B.HyperText and links Markup Language \n C. HighText Machine Language \n D.none of these \n",
  answer:"HyperText Markup Language"
},{
  question: "The correct sequence of HTML tags for starting a webpage is   \n A.Head, Title, HTML, body \n B. HTML, Body, Title, Head \n C. HTML, Head, Title, Body \n D.HTML, Head, Title, Body \n",
  answer:"HTML, Head, Title, Body"
},{
  question: "Which of the following element is responsible for making the text bold in HTML?   \n A.<pre> \n B.<a>\n C.<b>\n D.<br> \n",
  answer:"<b>"
},{
  question: " Which of the following tag is used for inserting the largest heading in HTML?   \n A.<h2> \n B.<h1>\n C.<h3>\n D.<h4> \n",
  answer:"<h1>"
},{
  question: "Which of the following tag is used to insert a line-break in HTML?  \n A.<pre> \n B.<a>\n C.<b>\n D.<br> \n",
  answer:"<br>"
},{
  question: "How to create an unordered list (a list with the list items in bullets) in HTML?  \n A.<ul> \n B.<ol>\n C.<li>\n D.<i> \n",
  answer:"<ul>"
},{
  question: " Which of the following element is responsible for making the text italic in HTML? \n A.<i> \n B.<italic>\n C.<pre>\n D.<p> \n",
  answer:"<i>"
},{
  question: "Which of the following tag is used to make the underlined text? \n A.<i>\n B.<ul>\n C.<pre>\n D.<u> \n",
  answer:"<u>"
}
              ]

for(var i=0;i<questions.length;i++){
var currentquestion = questions[i];
  quiz(currentquestion.question,currentquestion.answer)
}
console.log("your score "+score)
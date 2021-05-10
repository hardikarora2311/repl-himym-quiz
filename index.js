var rls= require("readline-sync");
var chalk= require("chalk")
var score=0;

//welcome with name
var name=rls.question("Can I have your good name?");
console.log("Hi "+ chalk.blue(name)+ "! Welcome to "+ chalk.red("HOW I MET YOUR MOTHER TRIVIA."));
console.log("---------------")

//highscores data and printing
console.log(chalk.blackBright.underline("HIGHSCORES-"))
var highscores=[
  {name:"Rohan", score:"9"},
  {name:"Harshit", score: "8"}
]
for(var i=0;i<highscores.length; i=i+1){
  console.log(chalk.blackBright(i+1 + ". "+ highscores[i].name + ":  "+ highscores[i].score))
}
console.log(chalk.blackBright("--------------"))

//quiz function
function play(question, answer){
  var ans=rls.question(question)
  if (ans.toString().toUpperCase()===answer.toString().toUpperCase()){
    console.log(chalk.green("You are right!"))
    score=score+1
  } else{
    console.log(chalk.redBright("Oops wrong answer :("))
  }
  console.log(chalk.blackBright("Current score: ", score))
  console.log("----------------------")
}


//questions list of objects
var questions=[
  {q:"True or false: MacLaren's Pub is the name of the bar where the five friends always hung out.", a:"True"},
  {q:"What year is it supposed to be when Ted is telling his two kids about how he met their mom?", a:"2030"},
  {q:"How many women did Ted date that were NOT 'the mother'?", a: "29"},
  {q:"What was the name of Robin's character on the Canadian kids' show?", a: "Robin sparkles"},
  {q:"What is the name of Ted and Barney's legendary bar?",  a: "Puzzles"},
  {q:"Where does Robin move at the beginning of season four?", a: "Japan"},
  {q:"True or false: Barney went to San Francisco to convince Lily to get back together with Marshall.", a: "true"},
  {q:"What is one of Marshall's college nicknames?", a: "big fudge"},
  {q:"How many kids did Lily and Marshall end up having?", a: "3"},
  {q:"Which character had a stripper doppelganger?", a: "Lily"}
]


//quiz function call
var l= questions.length;
for( var i=0; i<l; i=i+1){
  play( questions[i].q, questions[i].a)
}

console.log(chalk.yellow.bold("Your final score is: ",score))

//if highscore beaten message
if(score>= highscores[0].score){
  console.log(chalk.green("YAY! You have made a new high score"))
  console.log(chalk.green.bold("Send me a screenshot of this screen so that I can update your score."))
  console.log("--------------------")
}

//thankyou message
console.log(chalk.greenBright("Thankyou for playing the game. Feedbacks are appreciated."))
console.log(chalk.green("Have a great day ahead!"))
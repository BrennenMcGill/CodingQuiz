var timerEl = document.getElementById("timer");
var bodyEl = document.getElementById("main");
var waitingForAnswer = false;
var questionArray = [
    {
        q : "Commonly used data types DO NOT include:"
    },
    {
        q : "The condition in an if / else statement is enclosed with ________."
    },
    {
        q : ""
    },
    {
        q : ""
    },
    {
        q : ""
    }
];

//startTimer function

var timer = function(){
    var timeLeft = 76;

    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
    
            // call end game function
        }

        if (timeLeft === 69) {
            timerEl.textContent = "Nice!!!!";
        }
    }, 1000);

}

//displayBeginning function
var displayBeginning = function() {
    var titleEl = document.createElement("h1");
    titleEl.textContent = "Coding Quiz"
    titleEl.className= "question";

    bodyEl.appendChild(titleEl);

    var instructionEl = document.createElement("p");
    instructionEl.textContent = "Try to answer the following code related to question within the time limit. With each incorrect answer you will be penalized 10 seconds off of your score";
    instructionEl.className = "instructions";

    bodyEl.appendChild(instructionEl);

    var startQuizEl = document.createElement("button");
    startQuizEl.textContent = "start quiz";
    startQuizEl.className = "button";

    startQuizEl.addEventListener("click", startGame);
    bodyEl.appendChild(startQuizEl);
}

//startGame function
var startGame = function() {
    timer();
    for (var i=0; i < questionArray.length; i++) {
        
    }
}
    // for loop that runs through question[object]
        // call displayNewQuestion(question array[i])
        // set waitingFor Answer to be true
        // wait for waitingForAnswer to become false in while loop
    // when for loop is done call endGame()

//displayNewQuestion function
    // inputs = question object
    // generate question
    // generate ul for answers
    // generate li elements
    // make all li elements clickabel and call chooseanser(question object, answer index)

//displayAfterAnswer function
    // input = correct
    // generate right or wrong element based on input
    // start timer to call nextQuestion()

//nextQuestion 
    // switch waitingForAnswer to false

//displayHighScoreEntry function
    // displays all done element
    // displays your final score = time left
    // displays form for initial with submit button
    // submit form calls highScoreSubmit(initals + timer)

//displayHighScoreList function
    // generate high score  element
    // get list from local.storage
    // generate element for each list
    // generate button to startGame()
    // generate button to clear high scores and call clearHighScores()
    
// endgame function
    // call displayHighScoreEntry()

//chooseAnswer function
    // inputs = question object, answer index
    // check if question object selected correct index 
    // if incorrect timer - 10
    // calls displayAfterAnswer(whether its true or not)

//highScoreSubmit function
    // inputs(initial + timers)
    // set local.storage form inputs
    // calls displayHighScorelist()

//clearHighScores function
    // prompt "are you sure?"
    // clear local.storage if prompt is true and alert "scores cleared"

//object for questions
    // question string
    // answer string array
    // correct idex of answer string array

    displayBeginning();
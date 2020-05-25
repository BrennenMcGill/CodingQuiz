var timerEl = document.getElementById("timer");
var bodyEl = document.getElementById("main");
var waitingForAnswer = false;   
var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correct: 2
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        answers: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        correct: 2
    },
    {
        question: "Arrays in JavaScript can be used  to store _________.",
        answers: ["1. Numbers and Stings", "2. Other Arrays", "3. Booleans", "4. All Of The Above"],
        correct: 3
    },
    {
        question: "Sting values must be enclosed within ______ when being assigned to variables.",
        answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        correct: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console.log"],
        correct: 3
    }
];
var singleAnswerChosen = false;
var timeInterval = 0;
//startTimer function
var timeLeft = 0;


var timer = function(){
        timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            timerEl.textContent = 0;
            timeLeft = 0;
    
            endGame();
        }

        if (timeLeft === 69) {
            timerEl.textContent = "Nice!!!!";
        }
    }, 1000);

}

//displayBeginning function
var displayBeginning = function() {
    bodyEl.innerHTML = "";
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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//startGame function
async function startGame() {
    timeLeft = 76;

    timer();
    // for loop that runs through question[object]
    for (var i=0; i < questionArray.length; i++) {
        // call displayNewQuestion(question array[i])
        displayNewQuestion(questionArray[i]);
        // set waitingFor Answer to be true
        waitingForAnswer = true;
        // wait for waitingForAnswer to become false in while loop
        while (waitingForAnswer) {
            await sleep(1000);
        }
    }
    // when for loop is done call endGame()
    endGame();
}

//displayNewQuestion function
var displayNewQuestion = function(questionObj) {
    bodyEl.innerHTML = "";
    var questionEl = document.createElement("h1");
    questionEl.textContent = questionObj.question;
    questionEl.className = "question";

    bodyEl.appendChild(questionEl);

    var answerEl = document.createElement("ul");

    bodyEl.appendChild(answerEl);

    for (var i = 0; i < questionObj.answers.length; i++) {
        var answerList = document.createElement("li");
        answerList.textContent = questionObj.answers[i];
        answerList.className = "button";
        var isCorrect = (questionObj.correct === i);
        answerList.addEventListener("click", chooseAnswer.bind(null, questionObj, i));
        answerEl.appendChild(answerList);
    }
    singleAnswerChosen = false;
}

var displayAfterAnswer = function(isCorrect) {
 // generate right or wrong element based on input
    if (isCorrect) {
        var correctEl = document.createElement("h2");
        correctEl.className = "after-answer";
        correctEl.textContent = "Correct!!";

        bodyEl.appendChild(correctEl);
    }

    else {
        var wrongEl = document.createElement("h2");
        wrongEl.className = "after-answer";
        wrongEl.textContent = "Wrong!!";

        bodyEl.appendChild(wrongEl);
    }
    // start timer to call nextQuestion()
    setTimeout(nextQuestion, 2000);
}


var nextQuestion = function() {
    waitingForAnswer = false;
}
    // switch waitingForAnswer to false

//displayHighScoreEntry function
var displayHighScoreEntry = function() {
    bodyEl.innerHTML = "";
    var allDoneEl = document.createElement("h1");
    allDoneEl.textContent = "All Done!";
    allDoneEl.className = "question"

    bodyEl.appendChild(allDoneEl);

    var finalScoreEl = document.createElement("p");
    finalScoreEl.textContent = "Your final Score is " + timeLeft;
    finalScoreEl.className = "instructions";

    bodyEl.appendChild(finalScoreEl);

    var formContainerEl = document.createElement("div");
    formContainerEl.className = "form-container";

    bodyEl.appendChild(formContainerEl);
    
    var enterInitialEl = document.createElement("p");
    enterInitialEl.textContent = "Enter your intials to put on high score list!";
    enterInitialEl.className = "instructions";

    formContainerEl.appendChild(enterInitialEl);

    var formInputEl = document.createElement("INPUT");
    formInputEl.setAttribute("placeholder", "Intials");
    formInputEl.className = "form-input";

    formContainerEl.appendChild(formInputEl);

    var submitButtonEl = document.createElement("button");
    submitButtonEl.textContent = "Submit";
    submitButtonEl.className = "submit-button";

    submitButtonEl.addEventListener("click", displayBeginning);
    formContainerEl.appendChild(submitButtonEl);
    
}
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
    
var endGame = function(){
    timerEl.textContent = "";
    clearInterval(timeInterval);
    displayHighScoreEntry();
}

//chooseAnswer function
var chooseAnswer = function(questionObj, i) {
    if (singleAnswerChosen === false){
    // check if question object selected correct index 
    var isCorrect = (questionObj.correct === i)
    if (!isCorrect) {
    timeLeft = timeLeft - 15;
    }
    singleAnswerChosen = true;
    // calls displayAfterAnswer(whether its true or not)
    displayAfterAnswer(isCorrect);
}
}

//highScoreSubmit function
    // inputs(initial + timers)
    // set local.storage form inputs
    // calls displayHighScorelist()

//clearHighScores function
    // prompt "are you sure?"
    // clear local.storage if prompt is true and alert "scores cleared"


displayBeginning();
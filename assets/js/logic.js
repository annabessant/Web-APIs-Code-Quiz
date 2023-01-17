//Get title, form, start-quiz, feedback, timer, reset, submit-score, clear-score, header-text, view-score elements:
var title = document.getElementById('question-title');
var form = document.getElementById('choices');
var startButton = document.getElementById('start');
var questionDiv = document.getElementById('questions'); 
var feedback = document.getElementById('feedback');
var timerDisplay = document.getElementById('timer');
var timerEl = document.getElementById('time');
var questionCount = 0; 
var endDiv = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
// var resetButton = document.getElementById('reset');
var submitScoreButton = document.getElementById('submit');
// var clearScoresButton = document.getElementById('clear-scores');
var headerText = document.getElementById("header-text");
var viewScores = document.getElementById("view-scores");
// var userInfo;
// // Give the user the ability to save their initials and their score
// userInfo.name = window.prompt("Please leave your name", "Peppa Pig");

// Add event listeners: display the form, start timer, collect data from the form
var timerId;
var timeRemaining = 120;

startButton.addEventListener('click', function() {
    console.log ("startButtonClick");
    var startDiv=document.getElementById ("start-screen");
    startDiv.setAttribute ("class", "hide"); 
    questionDiv.removeAttribute('class');
    counter2 = 0;
    title.textContent = "JavaScript Coding Quiz";
    // headerText.textContent = "Welcome to our time Quiz! Your score is linked to the time left on the timer. You have 6 questions to answer within 60 seconds. For each incorrect answer you loose 10 seconds. BEST of LUCK!"
    updateQuestion();
    // viewScores.style.display = "block";
    // timerDisplay.style.display = "block";
    startButton.style.display = "none";
    form.style.display = "block";
    // userInfo.score = startTimer(time, timerDisplay);
    timerEl.textContent = timeRemaining;
    timerId = setInterval (timerFunc, 1000);
});

function timerFunc(){
    timeRemaining--;
    timerEl.textContent = timeRemaining;
    if (timeRemaining <=0){
        endQuiz();
    }
}

form.onclick=choiceHandler;


function choiceHandler (event){
var btn=event.target;

if (! btn.matches (".choice")){
    return;
}
if (btn.textContent !== chosenQuestion.answer){
    timeRemaining-=15;
    if (timeRemaining <0){
        timeRemaining=0
    }
    timerEl.textContent=timeRemaining;
    alert("wrongAnswer. press OK to continue");
} else{
    alert("correctAnswer. press OK to continue");
}
questionCount++;
if (timeRemaining <=0 || questionCount===questions.length){
    endQuiz();
} else {
    updateQuestion ();
}
}

function endQuiz (){
    clearInterval(timerId);
endDiv.removeAttribute('class');
finalScore.textContent=timeRemaining;
questionDiv.setAttribute('class', "hide");
}
//Collect data from the form
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     // DOM elements
//     var firstOption = document.getElementById("option-1");
//     var secondOption = document.getElementById("option-2");
//     var thirdOption = document.getElementById("option-3");
//     var forthOption = document.getElementById("option-4");

//     // For each option chosen as the correct answer
//     if (firstOption.checked){
//         providedAnswerIndex = firstOption.value;
//         correctAnswerCheck();
//         firstOption.checked = false;
//     }
//     if (secondOption.checked){
//         providedAnswerIndex = secondOption.value;
//         correctAnswerCheck();
//         secondOption.checked = false;
//     }
//     if (thirdOption.checked){
//         providedAnswerIndex = thirdOption.value;
//         correctAnswerCheck();
//         thirdOption.checked = false;
//     }
//     if (forthOption.checked){
//         providedAnswerIndex = forthOption.value;
//         correctAnswerCheck();
//         forthOption.checked = false;
//     }

//     counter ++;

//     if (counter < numberOfQuestions){
//         updateQuestion();
//     }
// });

// Restart the Quiz via reloading the page
// resetButton.addEventListener('click', function(){
//     location.reload();
// });

// Submit & clear user's score
submitScoreButton.addEventListener('click', function(){
    counter2++;
    saveScore();
    displayScores();
    viewScores.style.display = "none";
    timerDisplay.style.display = "none";
    feedback.style.display = "none";
    clearScoresButton.style.display = "block";
});

// clearScoresButton.addEventListener('click', function(){
//     clearScores();
// });


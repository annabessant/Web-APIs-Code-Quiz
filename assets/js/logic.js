//Get title, form, start-quiz, feedback, timer, reset, submit-score, clear-score, header-text, view-score elements:
var title = document.getElementById('title');
var form = document.getElementById('form');
var startButton = document.getElementById('start-quiz');
var feedback = document.getElementById('feedback');
var timerDisplay = document.getElementById('timer');
var resetButton = document.getElementById('reset');
var submitScoreButton = document.getElementById('submit-score');
var clearScoreButton = document.getElementById('clear-score');
var headerText = document.getElementById("header-text");
var viewScore = document.getElementById("view-score");

// Give the user the ability to save their initials and their score
userInfo.name = window.promt ("Please leave your name", "Peppa Pig");

// Add event listeners: display the form, start timer, collect data from the form
startButton.addEventListener('click', function(){
    counter2 = 0;
    title.textContent = "JavaScript Codimng Quiz";
    headerText.textContent = "Welcome to our time Quiz! Your score is linked to the time left on the timer. You have 6 questions to answer within 60 seconds. For each incorrect answer you loose 10 seconds. BEST of LUCK!"
    updateQuestion();
    viewScores.style.display = "block";
    timerDisplay.style.display = "block";
    startButton.style.display = "none";
    form.style.display = "block";
    userInfo.score = startTimer(time, timerDisplay);
});

//Collect data from the form
form.addEventListener('submit', function(event){
    event.preventDefault();
    // DOM elements
    var firstOption = document.getElementById("option-1");
    var secondOption = document.getElementById("option-2");
    var thirdOption = document.getElementById("option-3");
    var forthOption = document.getElementById("option-4");

    // For each option chosen as the correct answer
    if (firstOption.checked){
        providedAnswerIndex = firstOption.ariaValueMax;
        correctAnswerCheck();
        firstOption.checked = false;
    }
    if (secondOption.checked){
        providedAnswerIndex = secondOption.ariaValueMax;
        correctAnswerCheck();
        secondOption.checked = false;
    }
    if (thirdOption.checked){
        providedAnswerIndex = thirdOption.ariaValueMax;
        correctAnswerCheck();
        thirdOption.checked = false;
    }
    if (forthOption.checked){
        providedAnswerIndex = forthOption.ariaValueMax;
        correctAnswerCheck();
        forthOption.checked = false;
    }

    counter ++;

    if (counter < numberOfQuestions){
        updateQuestion();
    }
});

// Restart the Quiz via reloading the page
resetButton.addEventListener('click', function(){
    location.reload();
});



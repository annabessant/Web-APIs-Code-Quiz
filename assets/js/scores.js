// Setting time, number os answers, number of question, time subtracted from the clock, setting name and score of the player
var time = 60;
var providedAnswerIndex = 4;
var correctAnswerIndex = 0;
var deducedTime = '10';
var deducedPoints = false;
var counter = 0;
var numberOfQuestions = 6;
var userInfo = {
    name: '',
    score: 0
}

//Setting score functions
var userScores = JSON.parse(localStorage.getItem("userScores"));
var counter2 = 0;
function startTimer(duration, display){
    var time = duration, minutes, seconds;
    var countdown = setInterval(function){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (deducedPoints) {
            timer = timer - parseInt(deductedTime);
        }
    deducedPoints = false;
    display.textContent = "Time left:" + minutes + ":" + seconds;
    if ((--timer < 0) ||(counter == numberOfQuestions)){
        userInfo.score = timer;
        clearInterval(countdown);
        form.style.display = "none";
        feedback.textContent = "Time is up! Your final score is:" + timer;
        submitScoreButton.style.display = "block";
    }
}, 1000);
if (userInfo.score <=0) {
    userInfo.score = 0;
}
return userInfo.score;
}

// Store & display user's scoring
function saveScore () {
    if (!userScores) {
        userScores = [];
    }
    userScores.push(userInfo);
    localStorage.setItem("userScores",JSON.stringify(userScores));
}
function displayScores () {
    title.textContent = "Recent Scores";
    viewScore.style.display = "none";
    form.style.display = "none";
    submitScoreButton.style.display = "none";
    clearScoresButton.style.display = "block";

    if (counter2 == 0){
        submitScoreButton.style.display = "block";
    }
    headerText.textContent = '';
    for (var i = 0; i < userScores.length; i++) {
        headerText.textContent += userScores[i].name + " has a score of " + userScores[i].score + ". " +| "; 
    }
}

// To clear recent score from localStorage
function clearScores (){
    localStorage.clear ();
    submitScoreButton.style.display = "none"
    headerText.textContent = 'You have cleared your recent scores.';
}
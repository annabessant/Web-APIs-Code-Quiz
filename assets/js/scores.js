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
var questions = [
    {question:"Where is the correct place to inser a JavaScript?",
    choices: ["The <head> section", "The <body> section","Both the <head> and the <body> sections are correct", "After the <body> section"],
    answer: "Both the <head> and the <body> sections are correct"},

    {question:"Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>","<script>","<js>","<scripfile>"],
    answer:"<script>"},

    {question:"How to create 'Hello World' alert box?",
    choices:["alert('Hello World')","msgBox('Hello World')","msg('Hello World')","alertBox('Hello World')"],
    answer: "alert('Hello World')"},

    {question:"The condition in an if / else statement is enclosed with?",
    choices:["quotes","curly brakets","parenthesis","square brakets"],
    answer:"parenthesis"},

    {question:"Arrays in JavaSCript can be used to store:",
    choices:["numbers and strings","other arrays","booleans","all of the above"],
    answer:"all of the above"},

    {question:"When being assigned to variable, string values must be enclosed within:",
    choices:["commas","curly brakets","quotes","parenthesis"],
    answer:"curly brakets"},
];

// Update question, generate a new question, store questions' index
function updateQuestion() {
chosenQuestion = questions[(Math.floor(Math.random()*questions.length))];
answer = chosenQuestion.answer;
correctAnswerIndex = chosenQuestion.choices.indexOf(answer);
document.getElementById('question-title').textContent = chosenQuestion.question;
document.querySelector('#option-1').textContent = chosenQuestion.choices[0];
document.querySelector('#option-2').textContent = chosenQuestion.choices[1];
document.querySelector('#option-3').textContent = chosenQuestion.choices[2];
document.querySelector('#option-4').textContent = chosenQuestion.choices[3];
}

//Correct answer, incorrect answer message
function correctAnswerCheck() {
    if (providedAnswerIndex == correctAnswerIndex) {
        feedback.textContent = 'Your answer is correct!!';
        deductPoints = false;
    }
    else {
        feedback.textContent = 'Your answer is incorrect. You have deducted ' + deductedTime + ' seconds from the timer.';
        deductPoints = true;
    }
}
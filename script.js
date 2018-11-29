var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext()
{
    if(currentQuestion<2) {
        var b = document.querySelector("input[type=radio]:checked");
        if (b == null) {
            var quizkessage = document.getElementById("quiz-message");
            quizmessage.style.display = "inline"
            quickmessage.innerText = "select any option";
            var questionchoiceid=document.getElementById("choice-list");
            questionchoiceid.innerHTML='';
        }
        else
        {
            if (b == questions[currentQuestion].correctAnswer) {
                correctAnswers++;
            }
            var questionchoiceid = document.getElementById("choice-list");
            questionchoiceid.innerHTML = '';
            currentQuestion++;
        }
        displayCurrentQuestion();
    }
    else
    {
       displayScore();
    }
}


function displayCurrentQuestion() {
    var quizquestionid=document.getElementById("question");
    var questionchoiceid=document.getElementById("choice-list");
    quizquestionid.innerHTML='<p>'+questions[currentQuestion].question + '</p>';
    for (var i=0;i<questions[currentQuestion].choices.length;i++)
    {
        questionchoiceid.innerHTML+='<input type="radio" name="checked">'+questions[currentQuestion].choices[i] + '<br>';
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}
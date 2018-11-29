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
},{
    question : "In our Html file, where we should include our javascript file to work properly?",
    choices : [ "In head",
        "In title",
        "At the beginning of body",
        "Just before ending body"],
    correctAnswer : 3
},{
    question : "What is the name of pakistan's international t20 cricket captain?",
    choices : [ "Shahid afridi",
        "Shoaib Malik",
        "Sarfraz Ahmed",
        "Muhammad Hafeez"],
    correctAnswer : 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

displayCurrentQuestion();
document.getElementById("quiz-message").innerText=none;

function displayNext()
{
    //Checking the answer
    var ANSWER=document.QUIZ.choice.value;

    if(ANSWER==questions[currentQuestion].correctAnswer)
    {
        correctAnswers++;
    }
    //document.getElementById("quiz-message").innerHTML = "Must select an Option";
    //document.getElementById("quiz-message").innerText=block;

    //Displaying result at the end
    if(currentQuestion==4)
    {
        displayScore();
    }
    //for next question
currentQuestion++;

    //for calling next question till end of Quiz
    if(currentQuestion<5)
    {
        displayCurrentQuestion();
    }
    if(currentQuestion==5)
    {
        var message;
        alert('Your Quiz has been Completed \n Calculating your Marks...:)');
    }

}

function displayCurrentQuestion()
{

    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("choice1").innerText = questions[currentQuestion].choices[0];
    document.getElementById("choice2").innerText = questions[currentQuestion].choices[1];
    document.getElementById("choice3").innerText = questions[currentQuestion].choices[2];
    document.getElementById("choice4").innerText = questions[currentQuestion].choices[3];
}
function resetQuiz()
{
    if(currentQuestion==5)
    {
        alert('You have Finished the Quiz and got your result \n Resetting the Quiz....:)');
        currentQuestion = 0;
        correctAnswers = 0;
        hideScore();
        displayCurrentQuestion();
    }
    else
    {
        alert('Error:You have started attempting the Quiz \n FINISH THE QUIZ FIRST :) ');
    }

}
function displayScore()
{
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore()
{
    document.getElementById("result").style.display = 'none';
}
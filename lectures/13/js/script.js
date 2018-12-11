var QUESTIONS=
    [{
        question : "Earth is round or oval?",
        choice: ["round","oval","you dont know","none of above"],
        answer: 0
    },
        {
            question : "Who is Bruce Lee?",
            choice: ["Singer","Dancer","Fighter","none of above"],
            answer: 2
        },
        {
            question : "Who is the King of jungle?",
            choice: ["Dog","Wolf","Elephant","Loin"],
            answer: 3
        }];

var currentquestion=0;
var correctanswer=0;
currentQuestion();
document.getElementById("quiz-message").style.display="none";
function currentQuestion()
{
    var ID=document.getElementById("question");
    ID.innerHTML=QUESTIONS[currentquestion].question;
    var text="";
    for(var i=0;i<QUESTIONS[currentquestion].choice.length;i++)
    {
        text+="<input type='radio' name='RADIO' value='"+i+"'>" +QUESTIONS[currentquestion].choice[i] + "<br>";
    }
    document.getElementById("choice-list").innerHTML="<li>"+text+"</li>";
}
function nextquestion()
{
    var selectedvalue=document.querySelector('input[name="RADIO"]:checked');
    if(selectedvalue==null)
    {
        document.getElementById("quiz-message").innerText="Please Enter An Option";
        document.getElementById("quiz-message").style.display="block";
    }
    else {
        document.getElementById("quiz-message").style.display="none";
        selectedvalue=document.querySelector('input[name="RADIO"]:checked').value;
        if(selectedvalue==QUESTIONS[currentquestion].answer)
        {
            correctanswer++;
        }
        currentquestion++;
    }


    if(currentquestion<QUESTIONS.length)
    {
        currentQuestion();
    }
    else
    {
        displayscore();
    }
}
function displayscore()
{
    document.getElementById("result").innerHTML="Your score is = " + correctanswer;
    document.getElementById("result").style.display="block";
}
function reset()
{
    correctanswer=0;
    currentquestion=0;
    document.getElementById("quiz-message").style.display="none";
    document.getElementById("result").style.display="none";
    currentQuestion();
}

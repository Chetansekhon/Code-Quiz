var questions = [{
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        title: "What is the correct syntax for referring to an external script called 'script.js'?",
        choices: ['<script src="script.js">', '<script href="script.js">', '<script ref="script.js">', '<script name="script.js">'],
        answer: '<script src="script.js">'
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function:myFunction", "function myFunction()", "Int Main(args)"],
        answer: "function myFunction()"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["if (i==5)", "if i=5 then", "if i = 5", "if i == 5 then"],
        answer: "if (i==5)"
    },
    {
        title: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()", "call function myFunction()", "myFunction()", "void 'myFunction()' "],
        answer: "myFunction()"
    }
    // etc.
];
var questionDisplay = document.getElementById("questions");
var startbutton = document.getElementById("start");
var welcomepromt = document.getElementById("welcome promt");
var timerRemaining = questions.length * 15;
var timerEL = document.getElementById("timer");
var user =document.getElementById("user");
var input =document.getElementById("input");
var initials =document.getElementById("initials");
var leaderboard =JSON.parse(localStorage.getItem("playername")) ||[];
var intervalId;
var index = 0
console.log(questions);

function timer() {
    timerRemaining = timerRemaining - 1;
    timerEL.innerHTML = timerRemaining;

    if (timerRemaining <= 0) {
        clearInterval(intervalId);
    }
}

function displayquestion() {
    var question1 = document.createElement("h1")
    questionDisplay.innerHTML = "";
    question1.innerHTML = questions[index].title;
    questionDisplay.appendChild(question1);
    for (var i = 0; i < questions[index].choices.length; i++) {
        var button1 = document.createElement("button")
        button1.textContent = questions[index].choices[i];
        button1.onclick = checkanswers;
        questionDisplay.appendChild(button1);
    }


}

function checkanswers() {
    console.log(this.textContent)
    if (this.textContent === questions[index].answer) {
        alert("Correct")

    } else{
        alert("Incorrect")
        timerRemaining = timerRemaining - 5; 
        timerEL.innerHTML = timerRemaining;
    }
    index++;
    if (index===questions.length){
        endquiz();
        
    }
    else{displayquestion();
    }
    
}
function endquiz() {
    clearInterval(intervalId);
    questionDisplay.innerHTML = "";
    user.classList.remove("hide") 
}
startbutton.addEventListener("click", function () {
    welcomepromt.classList.add("hide");
    intervalId = setInterval(timer, 1000);
    displayquestion();

});
initials.addEventListener("click" , function () {
    var player={
        user: input.value,
        score: timerRemaining
    }
    leaderboard.push(player);
    localStorage.setItem("playername", JSON.stringify(leaderboard));
    console.log (player)
    input.value ="";
    welcomepromt.classList.remove("hide");
    user.classList.add("hide");
    timerRemaining = questions.length * 15;
    timerEL.innerHTML = "";
    index =0;
    
});

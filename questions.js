var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var oderListEl = document.querySelector("#q-list");
var finishDiv = document.querySelector(".finish-section");
var finalScore = document.querySelector("#result");
var errMsg = document.querySelector("#errorSmg");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responsDiv = document.querySelector("#response");
var finaPageEl = document.querySelector("#final-page");



// Create an  array of questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "question three.",
        choices: ["ans1", "ans2", "ans3", "ans4"],
        answer: "ans1"
    }

]


// display questions 
function displayQuestions() {
    //responsDiv.innerHTML='';
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    //This is a checkpoint to clear the list container at each loop
    oderListEl.innerHTML = '';
    //responsDiv.innerHTML="";

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    oderListEl.appendChild(liTag2)
    divContEL.appendChild(oderListEl);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    oderListEl.appendChild(liTag3)
    divContEL.appendChild(oderListEl);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}


// set the time to zero
var timer = 45;

// this is the timer funtion which will start counting as soon as the quiz starts
function setupTimer() {
    var timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
        if (timer === 0 || i === questions.length - 1) {
            clearInterval(timeCount);
            timer = timer;
            var timeReset = timeElement.textContent = "Time:" + " " + timer;
            //clearInterval(timeCount);
            timeElement.textContent = timeReset;

        }
    }, 1000)
}
// Here is the event listener to start the timer and hide the quiz button
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setupTimer()
        setTimeout(function () {
            displayQuestions();
        }, 1000)

    }

})

function displayZero() {
    timer = timer;
    console.log(timer)
    if (timer === 0 && i < questions.length - 1) {
        console.log(timer)
        alert("hello")
        document.innerHTML = '';
    }

}
// declare the index variable for the onclickHandler function
var i = 0;

// Add a function to compare the answers and display each questions as the buttons are clicked.
function onclickHandler(event) {

    var answerText = event.target.textContent
    if (answerText === questions[i].answer) {
        timer = timer;
        responsDiv.setAttribute("style", "color: green")
        responsDiv.textContent = "Correct";
    } else {

        responsDiv.setAttribute("style", "color: red")
        responsDiv.textContent = "Wrong";
        timer = timer - 15;
        console.log(timer)
    }

    if ((i < questions.length - 1) && (timer >= 0)) {

        i++;

        setTimeout(function () {
            displayQuestions();
            responsDiv.textContent = "";
        }, 1000)
    } else {
        setTimeout(function () {
            responsDiv.textContent = "";
            displayResult();

        }, 500)

        //stopTimer()
        divContEL.innerHTML = '';
        //displayZero();
    }



    //Function to display users final scrore 
    function displayResult() {

        finishDiv.style.visibility = "visible";
        timeElement.textContent = "Time:" + " " + timer;
        var HighScores = timer;
        localStorage.getItem(HighScores)
        finalScore.textContent = "Your finally score is: " + HighScores;
        //localStorage.getItem(highScore)
        localStorage.setItem("HighScores", HighScores)
        //var initialInput = document.querySelector("#inputInitial").value;



    }


}
function renderLastItem() {
    var a = localStorage.getItem("HighScores");
    var b = localStorage.getItem("initial");
    if (a && b === "") {
        return
    }
    finishDiv.textContent="";
    var finaPageEl = document.querySelector(".final-page");
    finaPageEl.style.visibility = "visible";
    var initialNadScore = document.querySelector("#staticEmail");
    initialNadScore.textContent = a + " " + b;

}

function displayFinalHighScore() {


    var holdInitial = initialInput.value;
    console.log(holdInitial);
}
//document.addEventListener("click", storeInitial)

document.addEventListener("submit", function (event) {
    event.preventDefault();
    var initialInput = document.querySelector("#inputInitial").value;
    //var finaPageEl = document.querySelector("#final-page");
    //var initialAndScore = document.querySelector("#staticEmail");

    if (initialInput === "") {
        errMsg.setAttribute("style", "color: red")
        errMsg.textContent = "Initial input field cannot be empty"
    } else {
        errMsg.textContent = "";
        localStorage.getItem(initialInput)
        localStorage.setItem("Initial", initialInput)
        console.log(initialInput)
        renderLastItem()
    }


})

//storeInitial()
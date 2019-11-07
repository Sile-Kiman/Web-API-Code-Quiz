var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");
var divQ1Element = document.querySelector("#question1");
var divQ2Element = document.querySelector("#question2");
var divQ3Element = document.querySelector("#question3");
var oderList1El = document.querySelector("#q1-list");
var oderList2El = document.querySelector("#q2-list");
var oderList3El = document.querySelector("#q3-list");
var liElements = document.querySelector(".all_li");
var allBtnEl= document.querySelectorAll(".all_btn") 

 
console.log(allBtnEl.toString());

// create an li tag
 var liTag = document.createElement("li");
// set li tag attribute
 liTag.setAttribute("style" , "color:red")

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
        answer: "ans1",
    },
]


// for loop to set attribute to all my li tags
/** 
 function attribut(){
     var newLiTag="";
     for(var i=0; i<liElements.length; i++){
        
     newLiTag =  liElements[i]
     newLiTag.setAttribute("style", "color:red")
    console.log(attribut())
}
// }*/

 

// set the time to zero
var timer = 76;

// this is the timer funtion which will start counting as soon as the quiz starts
function setupTimer() {
    var timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
        if (timer === 0) {
            clearInterval(timeCount);
            timeElement.textContent = timeReset;

        }
    }, 1000)
}
// Here is the event listener to start the timer and hide the quiz button
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setupTimer()
        displayQuestion1()
        displayQuestion2()
        displayQuestion3()
        
    } 
 })
    


document.addEventListener("click", function (event) {
    if (event.target === allBtnEl) {
        divQ1Element.style.display = "none";   
    }
    
})
 


// Add the fisrt question to the page
function displayQuestion1() {
  
    var pTag= document.createElement("h3");
    holdQ1Title = questions[0].title
    pTag.textContent=holdQ1Title
    divQ1Element.appendChild(pTag)
   
    var holdq1Choice1=questions[0].choices[0];
    var holdq1Choice2=questions[0].choices[1];
    var holdq1Choice3=questions[0].choices[2];
    var holdq1Choice4=questions[0].choices[3];

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class","all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class","all_btn")
    btn.textContent=holdq1Choice1;
    liTag1.appendChild(btn)
    oderList1El.appendChild(liTag1);
    divQ1Element.appendChild(oderList1El);


    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class","all_btn")
    btn2.textContent=holdq1Choice2;
    liTag2.appendChild(btn2)
    oderList1El.appendChild(liTag2)
    divQ1Element.appendChild(oderList1El);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class","all_btn")
    btn3.textContent=holdq1Choice3;
    liTag3.appendChild(btn3)
    oderList1El.appendChild(liTag3)
    divQ1Element.appendChild(oderList1El);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class","all_btn");
    btn4.textContent=holdq1Choice4;
    liTag4.appendChild(btn4);
    oderList1El.appendChild(liTag4);
    divQ1Element.appendChild(oderList1El);

}
 
 // Add the second question to the page
function displayQuestion2() {
  
    var pTag= document.createElement("h3");
    holdQ1Title = questions[1].title
    pTag.textContent=holdQ1Title
    divQ2Element.appendChild(pTag)
   
    var holdq1Choice1=questions[1].choices[0];
    var holdq1Choice2=questions[1].choices[1];
    var holdq1Choice3=questions[1].choices[2];
    var holdq1Choice4=questions[1].choices[3];

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class","all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class","all_btn")
    btn.textContent=holdq1Choice1;
    liTag1.appendChild(btn)
    oderList2El.appendChild(liTag1);
    divQ2Element.appendChild(oderList2El);


    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class","all_btn")
    btn2.textContent=holdq1Choice2;
    liTag2.appendChild(btn2)
    oderList2El.appendChild(liTag2)
    divQ2Element.appendChild(oderList2El);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class","all_btn")
    btn3.textContent=holdq1Choice3;
    liTag3.appendChild(btn3)
    oderList2El.appendChild(liTag3)
    divQ2Element.appendChild(oderList2El);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class","all_btn");
    btn4.textContent=holdq1Choice4;
    liTag4.appendChild(btn4);
    oderList2El.appendChild(liTag4);
    divQ2Element.appendChild(oderList2El);
 
}

 // Add the third question to the page
 function displayQuestion3() {
  
    var pTag= document.createElement("h3");
    holdQ1Title = questions[2].title
    pTag.textContent=holdQ1Title
    divQ3Element.appendChild(pTag)
   
    var holdq1Choice1=questions[2].choices[0];
    var holdq1Choice2=questions[2].choices[1];
    var holdq1Choice3=questions[2].choices[2];
    var holdq1Choice4=questions[2].choices[3];

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class","all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class","all_btn")
    btn.textContent=holdq1Choice1;
    liTag1.appendChild(btn)
    oderList3El.appendChild(liTag1);
    divQ3Element.appendChild(oderList3El);


    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class","all_btn")
    btn2.textContent=holdq1Choice2;
    liTag2.appendChild(btn2)
    oderList3El.appendChild(liTag2)
    divQ3Element.appendChild(oderList3El);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class","all_btn")
    btn3.textContent=holdq1Choice3;
    liTag3.appendChild(btn3)
    oderList3El.appendChild(liTag3)
    divQ3Element.appendChild(oderList3El);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class","all_btn");
    btn4.textContent=holdq1Choice4;
    liTag4.appendChild(btn4);
    oderList3El.appendChild(liTag4);
    divQ3Element.appendChild(oderList3El);
 
}



 

 

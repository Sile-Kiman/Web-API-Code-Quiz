var timeElement= document.getElementById("time");
var  wrapperElement = document.querySelectorAll(".wrapper");


var timer = 10;

 function setupTimer(){
   var timeCount = setInterval(function(){
    timer--;
   var timeReset= timeElement.textContent= "Time:" +" " +timer;
        if(timer ===0){
            clearInterval(timeCount);
            timeElement.textContent= timeReset;
            // alert("Timed out");
        }
   },1000) 
   displayContent()
 }
//  setupTimer();

 function displayContent(){
    
    // document.getElementsByClassName("wrapper").style.display = "none";
     
 }

 

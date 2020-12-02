var ask = document.querySelector("#question");
var checkAnswer = document.querySelector("#check")
var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var a4 = document.querySelector("#a4")
var timer = document.getElementById("time")
var score = 0
var names = document.getElementById("user-text")
var subBtn = document.getElementById("sub-btn")
var list = document.getElementById("user-list")
var track =[]
var secondsLeft = 74

//quiz time
starting()
function starting(){
    document.getElementById("hContainer").style.visibility='hidden'
    document.getElementById("starter").style.visibility='visible'
    score=0
}
function quiz1(){
    setTime()
   document.getElementById("qContainer").style.visibility='visible'
   document.getElementById("qContainer").removeAttribute("hidden")
   document.getElementById("starter").style.visibility='hidden'
   ask.innerHTML = "Commonly used data types DO NOT include:";
   a1.setAttribute("value", "strings");
   a2.setAttribute("value", "booleans");
   a3.setAttribute("value", "alerts");
   a4.setAttribute("value", "numbers");
   a3.onclick = function(){
    score+=20
    checkAnswer.innerHTML="correct"
    console.log(score)
    quiz2() 
   }
   a1.onclick= function(){
   checkAnswer.innerHTML="wrong"
   quiz2()
   secondsLeft-=10     
   }
   a2.onclick= function(){
    checkAnswer.innerHTML="wrong"
    quiz2()  
    secondsLeft-=10   
    }
   a4.onclick= function(){
   checkAnswer.innerHTML="wrong"
   quiz2() 
   secondsLeft-=10   
    }  
}
function quiz2(){
    ask.innerHTML = "The condition in an if/else statement is enclosed within _____.";
    a1.setAttribute("value", "quotes");
    a2.setAttribute("value", "curly brackets");
    a3.setAttribute("value", "parentheses");
    a4.setAttribute("value", "square brackets");
    a3.onclick = function(){
        score+=20
        checkAnswer.innerHTML="correct"
        console.log(score)
        quiz3() 
       }
       a1.onclick= function(){
       checkAnswer.innerHTML="wrong"
       quiz3()  
       secondsLeft-=10   
       }
       a2.onclick= function(){
        checkAnswer.innerHTML="wrong"
        quiz3()   
        secondsLeft-=10  
        }
       a4.onclick= function(){
       checkAnswer.innerHTML="wrong"
       quiz3()    
       secondsLeft-=10 
        } 
 }
 function quiz3(){
    ask.innerHTML = "Arrays in JavaScript can be used to store _____.";
    a1.setAttribute("value", "numbers  and  strings");
    a2.setAttribute("value", "other arrays");
    a3.setAttribute("value", "booleans");
    a4.setAttribute("value", "all of the above");
    a4.onclick = function(){
        score+=20
        checkAnswer.innerHTML="correct"
        console.log(score)
        quiz4() 
       }
       a1.onclick= function(){
       checkAnswer.innerHTML="wrong"
       quiz4() 
       secondsLeft-=10    
       }
       a2.onclick= function(){
        checkAnswer.innerHTML="wrong"
        quiz4() 
        secondsLeft-=10    
        }
       a3.onclick= function(){
       checkAnswer.innerHTML="wrong"
       quiz4() 
       secondsLeft-=10    
        }
   
 }
 function quiz4(){
    ask.innerHTML = "String values must be enclosed within _____ when being assigned to variables.";
    a1.setAttribute("value", "commas");
    a2.setAttribute("value", "curly brackets");
    a3.setAttribute("value", "quotes");
    a4.setAttribute("value", "parentheses");
    a3.onclick = function(){
        score+=20
        checkAnswer.innerHTML="correct"
        console.log(score)
        quiz5() 
       }
       a1.onclick= function(){
       checkAnswer.innerHTML="wrong"
       quiz5()  
       secondsLeft-=10   
       }
       a2.onclick= function(){
        checkAnswer.innerHTML="wrong"
        quiz5() 
        secondsLeft-=10    
        }
       a4.onclick= function(){
       checkAnswer.innerHTML="wrong"
       quiz5() 
       secondsLeft-=10   
        }
   
 }
 function quiz5(){
    ask.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
    a1.setAttribute("value", "JavaScript");
    a2.setAttribute("value", "terminal/bash");
    a3.setAttribute("value", "for loops");
    a4.setAttribute("value", "console.log");
    a4.onclick = function(){
        score+=20
        checkAnswer.innerHTML="correct"
        console.log(score)
        allDone()
       }
       a1.onclick= function(){
       checkAnswer.innerHTML="wrong"
        allDone()
       }
       a2.onclick= function(){
        checkAnswer.innerHTML="wrong"
        allDone() 
       }
       a3.onclick= function(){
       checkAnswer.innerHTML="wrong"      
       allDone()
       }
   
 }
 //show scores
 function allDone(){
       document.getElementById("qContainer").hidden=true;
       document.getElementById("dContainer").style.visibility='visible'
       document.getElementById("uscore").textContent="Your final score is"+score
 }
 
 function viewHighScores(){
       document.getElementById("dContainer").style.visibility='hidden'
       document.getElementById("hContainer").style.visibility="visible" 
    
 }
 function storeScore(event){
    var rec = names.value
    var li = document.createElement("li");
    li.innerHTML=rec+" - "+score
    list.append(li);
    viewHighScores()
 }
 
 function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        allDone();
      }
  
    }, 1000);
  }

function clearScores(){
   list.innerHTML = ""  
}
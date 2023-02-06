let computerGuess;
let userGuess=[];
let userGuessUpdate =document.getElementById("textUpdate");
let userNumberUpdate=document.getElementById("inputBox");

const init = () =>{
    computerGuess=Math.floor(Math.random()*100);
    console.log(computerGuess);
       document.getElementById("newGameButton").style.display="none";
       document.getElementById("gameArea").style.display="none"; 
}
const startGame = ()=>{
  document.getElementById("WelcomeScreen").style.display="none";
  document.getElementById("gameArea").style.display="block";
}

 const startNewGame =()=>{
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute('disabled', true);
 }

const  compareGuess=()=>{
    const userNumber =Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML=userGuess;
    if(maxGuess>userGuess.length){
    //check the value low or high
    if (userNumber>computerGuess){
       userGuessUpdate.innerHTML="Your guess is High ";
       userNumberUpdate.value=" ";
       console.log(userGuessUpdate);
    }
    else if (userNumber<computerGuess){
       userGuessUpdate.innerHTML="Your guess is Low ";
       userNumberUpdate.value=" "; 
       console.log(userGuessUpdate);
    }
    else {
       userGuessUpdate.innerHTML="Your guess is Correct ";
       userNumberUpdate.value=" ";
       startNewGame();
       console.log(userGuessUpdate);
    }
} else {
    if (userNumber>computerGuess){
        userGuessUpdate.innerHTML=`You Loose ! correct number was ${computerGuess}`;
        userNumberUpdate.value=" ";
        startNewGame();
        console.log(userGuessUpdate);
     }
     else if (userNumber<computerGuess){
        userGuessUpdate.innerHTML=`You Loose ! correct number was ${computerGuess}`;
        userNumberUpdate.value=" "; 
        startNewGame();
        console.log(userGuessUpdate);
     }
     else {
        userGuessUpdate.innerHTML="Your guess is Correct ";
        userNumberUpdate.value=" ";
        startNewGame();
        console.log(userGuessUpdate);
     }
}
   document.getElementById("attempts").innerHTML=userGuess.length;
   }

   const clickButton=()=>{
    document.getElementById("gameArea").style.display="none";
    document.getElementById("WelcomeScreen").style.display="block";
    window.location.reload();
   }
const easyMode =() => {
    maxGuess=10;
    startGame();
}

const hardMode =() =>{
    maxGuess=5;
    startGame();
}


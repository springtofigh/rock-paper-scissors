// VARIABLES
const userChoice = document.querySelector("#your-choice");
const buttonSelect = document.querySelector("#game-button button");
const gameResult =  document.querySelector(".result");
const images = document.querySelectorAll("#player-hand img");
// Timer Counter
let counter = 3;
// Start Game
let gameStarted = false;

buttonSelect.addEventListener("click" , function() {
    if (gameStarted == false){
        buttonSelect.innerHTML = counter;
        gameStarted = true;
    interval = setInterval(function() {
    if (counter > 0){
        counter--;
        buttonSelect.innerHTML = counter
    } else {
        endGame()
        clearInterval(interval)
        buttonSelect.innerHTML = "شروع مجدد؟";
    }
    }, 1000)
  }
})

if (userChoice.value !== false ) {
alert("راهنمای بازی:  لطفا در شروع هر مرحله یک گزینه انتخاب کنید");
}

function endGame() {
  const botChoice =  Math.floor((Math.random() * 3)+1);

    images[0].src = "images/hand_"+userChoice.value+".png";
    images[1].src = "images/hand_"+botChoice+".png";

    // CONDITIONS
  if (botChoice == userChoice.value){
    gameResult.innerHTML = "بازی مساوی شد" // Same result
  } else if(userChoice.value == 1 && botChoice == 2){
    gameResult.innerHTML = "شما برنده شدید" // User rock Bot Scissoer
  } else if (userChoice.value == 2 && botChoice == 1){
    gameResult.innerHTML = "شما باختید"   //   User Scissoer Bot rock
  } else if (userChoice.value == 3 && botChoice == 2){
    gameResult.innerHTML = "شما باختید" // User paper Bot Scissoer
  } else if (userChoice.value == 3 && botChoice == 1){
    gameResult.innerHTML = "شما بردید" // User paper Bot rock
  } else if (userChoice.value == 2 && botChoice == 3){
    gameResult.innerHTML = "شما بردید" // User Scissoer Bot Paper
  } else if (userChoice.value == 1 && botChoice == 3){
    gameResult.innerHTML = "شما باختید" // User rock Bot paper
} 
  gameStarted = false;
  counter = 3;
}
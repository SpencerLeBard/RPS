

function compRand() {
  let index = Math.floor((Math.random() * 3) + 1)
  if (index == 1) {
    return "rock"
  }
  else if (index == 2) {
    return "paper"
  }
  else if (index == 3) {
    return "scissors"
  }
}

function play(playerChoice) {


  let compChoice = compRand()
  if (playerChoice == compChoice) {
    drawResult("Lame - You tied")
  }
  else if (playerChoice == "rock") {
    if (compChoice == "paper") {

      drawResult("The computer chose paper, you lose");
    } else {
      drawResult("Computer chose scissors , You Win!!!")
    }
  }
  else if (playerChoice == "paper") {
    if (compChoice == "rock") {
      drawResult("The Computer chose Rock, You Win!!!!!")
    } else {
      drawResult("The computer chose scissors , you lose");
    }
  }
  else if (playerChoice == "scissors") {
    if (compChoice == "rock") {
      drawResult("the computer chose rock, you lose");
    } else {
      drawResult("The Computer chose paper , You win!!!")
    }
  }


}

function drawResult(result) {
  document.getElementById("phrase").innerHTML = `<p> ${result} </p>`

}

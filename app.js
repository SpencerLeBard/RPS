let rockbutton = document.getElementById("rock-button")
let paperbutton = document.getElementById("papper-button")
let sissorsbutton = document.getElementById("scissors-button")


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


  debugger
  let compChoice = compRand()
  if (playerChoice == compChoice) {
    console.log("tie");
  }
  else if (playerChoice == "scissors") {
    if (compChoice == "rock") {
      console.log("you lose");
    } else {
      console.log("you win");
    }
  }
  else if (playerChoice == "paper") {
    if (compChoice == "rock") {
      console.log("you win");
    } else {
      console.log("you lose");
    }
  }
  else if (playerChoice == "rock") {
    if (compChoice == "paper") {
      console.log("you lose");
    } else {
      console.log("you win");
    }
  }
}

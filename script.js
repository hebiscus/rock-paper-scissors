function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

const computerSelection = getComputerChoice();
const playerSelection = buttonvalue();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'rock') {
        document.getElementById("gameScore").innerHTML = "That's a tie!";
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        playerScore += 1;
        document.getElementById("gameScore").innerHTML = "Player wins!";
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        computerScore += 1;
        document.getElementById("gameScore").innerHTML = "Computer wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'paper') {
        document.getElementById("gameScore").innerHTML = "That's a tie!";
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        playerScore += 1;
        document.getElementById("gameScore").innerHTML = "Player wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        computerScore += 1;
        document.getElementById("gameScore").innerHTML =  "Computer wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'scissors') {
        document.getElementById("gameScore").innerHTML = "That's a tie!";
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        playerScore += 1;
        document.getElementById("gameScore").innerHTML =  "Player wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        computerScore += 1;        
        document.getElementById("gameScore").innerHTML = "Computer wins!";
    } 
}

// function playerChoice () {
//     if (document.getElementById == "rockButton") {
//         return 'rock';
//     } else if (document.getElementById == "paperButton") {
//         return 'paper';
//     } else {
//         return 'scissors'
//     }
// }

function buttonvalue() {
    let value = document.getElementById("rockButton").value;
    return value;
}

document.getElementById("rockButton").addEventListener("click", buttonvalue);
document.getElementById("rockButton").addEventListener("click", playRound);
// document.getElementById("paperButton").addEventListener("click", playerChoice);
// document.getElementById("paperButton").addEventListener("click", playRound);
// document.getElementById("scissorsButton").addEventListener("click", playerChoice);
// document.getElementById("scissorsButton").addEventListener("click", playRound);


let playerScore = 0;
let computerScore = 0;

    // if (playerScore > computerScore) {
    //         return "Player has won the whole game!";
    //     } else if (computerScore > playerScore) {
    //         return "Computer has won the whole game!";
    //     } else if (computerScore & playerScore == 0) {
    //         return "damn you didn't even play :(";
    //     } else if (computerScore == playerScore) {
    //         return "Game is tied!"; 
    //     } else 
    //         return "Seems like game is tied!"; 



// function getPlayerChoice() {
//     let player = prompt ("Choose your weapon");
//     return player.toLowerCase();
// }

// function game() {
//      for (i = 1; i <= 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//        console.log(playRound(playerSelection, computerSelection));
//     } 
//     if (playerScore > computerScore) {
//         return "Player has won the whole game!";
//     } else if (computerScore > playerScore) {
//         return "Computer has won the whole game!";
//     } else if (computerScore & playerScore == 0) {
//         return "damn you didn't even play :(";
//    /* } else if (computerScore == playerScore) {
//         return "Game is tied!"; */
//     } else 
//         return "Seems like game is tied!"; 
//     }

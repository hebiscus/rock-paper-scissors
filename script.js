function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

const computerSelection = getComputerChoice();
const playerSelection = playerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'rock') {
        return "That's a tie!";
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        playerScore += 1;
        return "Player wins!";
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        computerScore += 1;
        return "Computer wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'paper') {
        return "That's a tie!";
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        playerScore += 1;
        return "Player wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        computerScore += 1;
        return "Computer wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'scissors') {
        return "That's a tie!";
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        playerScore += 1;
        return "Player wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        computerScore += 1;        
        return "Computer wins!";
    } else {
        return "Unavailable weapon";
    }
}

function playerChoice () {
    if (document.getElementById == "rockButton") {
        return 'rock';
    } else if (document.getElementById == "paperButton") {
        return 'paper';
    } else {
        return 'scissors'
    }
}

document.getElementById("rockButton").addEventListener("click", playerChoice);
document.getElementById("rockButton").addEventListener("click", playRound);
document.getElementById("paperButton").addEventListener("click", playerChoice);
document.getElementById("paperButton").addEventListener("click", playRound);
document.getElementById("scissorsButton").addEventListener("click", playerChoice);
document.getElementById("scissorsButton").addEventListener("click", playRound);




// let playerScore = 0;
// let computerScore = 0;

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

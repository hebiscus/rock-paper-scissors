function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase()
}

function getPlayerChoice() {
    let player = prompt ("Choose your weapon");
    return player.toLowerCase();
}

/* let player = prompt ("This is a prompt box"); */

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'rock') {
        return "That's a tie!";
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        return "Player wins!";
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        return "Computer wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'paper') {
        return "That's a tie!";
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        return "Player wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        return "Computer wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'scissors') {
        return "That's a tie!";
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        return "Player wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        return "Computer wins!";
    } else {
        return "Unavailable weapon"
    }
}

score = "That's a tie" || "Player wins!" || "Computer wins!";

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection)); 
 

function game() {
     for (i = 1; i <= 5; i++) {
        getPlayerChoice();
        getComputerChoice();
        playRound(playerSelection, computerSelection)
       console.log(playRound(playerSelection, computerSelection));
    } 

}

console.log(game());
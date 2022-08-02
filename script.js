function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase()
}

let player = prompt ("This is a prompt box"); 

function oneRound(playerSelection, computerSelection) {
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

const playerSelection = player.toLowerCase();
const computerSelection = getComputerChoice();
/* console.log(oneRound(playerSelection, computerSelection)); */

function game() {
    let i = oneRound(playerSelection, computerSelection);
    for (i = 1; i <= 5; i++) {
        console.log(oneRound(playerSelection, computerSelection));
    }
}

console.log(game())
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

function getPlayerChoice() {
    let player = prompt ("Choose your weapon");
    return player.toLowerCase();
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'rock') {
        i -= 1;
        return "That's a tie!";
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        playerScore += 1;
        return "Player wins!";
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        computerScore += 1;
        return "Computer wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'paper') {
        i -= 1;
        return "That's a tie!";
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        playerScore += 1;
        return "Player wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        computerScore += 1;
        return "Computer wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'scissors') {
        i -= 1;
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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
/* console.log(playRound(playerSelection, computerSelection)); */
 
let playerScore = 0;
let computerScore = 0;

function game() {
     for (i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
    

    } 
    if (playerScore > computerScore) {
        return "Player has won the whole game!";
    } else if (computerScore > playerScore) {
        return "Computer has won the whole game!";
    } else if (computerScore == playerScore) {
        return "Game is tied!";
    } else 
        return "Uhoh, seems like you picked an unavailable weapon every round"; 
    }


console.log(game());
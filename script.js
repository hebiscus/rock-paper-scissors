function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase()
}

let player = prompt ("This is a prompt box"); 
let callCount = 0;

function oneRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'rock') {
        callCount += 1;
        return "That's a tie!";
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        callCount += 1;
        return "Player wins!";
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        callCount += 1;
        return "Computer wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'paper') {
        callCount += 1;
        return "That's a tie!";
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        callCount += 1;
        return "Player wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        callCount += 1;
        return "Computer wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'scissors') {
        callCount += 1;
        return "That's a tie!";
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        callCount += 1;
        return "Player wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        callCount += 1;
        return "Computer wins!";
    } else {
        return "Unavailable weapon"
    }
}

const playerSelection = player.toLowerCase();
const computerSelection = getComputerChoice();
 console.log(oneRound(playerSelection, computerSelection)); 


function game() {
  /*  for (i = 1; i <= 5; i++) {
       oneRound(playerSelection, computerSelection); 
       console.log(oneRound(playerSelection, computerSelection,), i); */
        oneRound(playerSelection, computerSelection);
    } 






console.log(game());
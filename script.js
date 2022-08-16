function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}
let playerScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'rock') {
        document.getElementById("roundScore").innerHTML = " " + "That's a tie!" + " " + `${playerScore}` + ":" +`${computerScore}`;
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        playerScore += 1;
        document.getElementById("roundScore").innerHTML = "Player wins!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        computerScore += 1;
        document.getElementById("roundScore").innerHTML = " " + "Computer wins!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else if (playerSelection == 'paper' & computerSelection == 'paper') {
        document.getElementById("roundScore").innerHTML = " " + "That's a tie!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        playerScore += 1;
        document.getElementById("roundScore").innerHTML = " " + "Player wins!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        computerScore += 1;
        document.getElementById("roundScore").innerHTML = " " + "Computer wins!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else if (playerSelection == 'scissors' & computerSelection == 'scissors') {
        document.getElementById("roundScore").innerHTML = " " + "That's a tie!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        playerScore += 1;
        document.getElementById("roundScore").innerHTML =  " " + "Player wins!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        computerScore += 1;        
        document.getElementById("roundScore").innerHTML = " " + "Computer wins!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    } else {
        document.getElementById("roundScore").innerHTML = " " + "Computer wins!" + " " + `${playerScore}` + ":" + `${computerScore}`;
    }
}

function game() {
    if (playerScore == 5 ) {
        document.getElementById("gameScore").textContent = document.getElementById("gameScore").textContent + " " + "You're so good... wowzers";
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
    } else if (computerScore ==5) {
        document.getElementById("gameScore").textContent = document.getElementById("gameScore").textContent + " " + "Defeated by luck... how does it feel?";
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
    } 
}


let rockbutton = document.getElementById("rockButton");
let paperbutton = document.getElementById("paperButton");
let scissorsbutton = document.getElementById("scissorsButton");

rockbutton.addEventListener("click", function(e) {
    if (playerScore <= 5 && computerScore <= 5) {
        playRound(e.target.value, getComputerChoice());
        game();
    } else {
        return;
    }
    
});

paperbutton.addEventListener("click", function(e) {
    if (playerScore <= 5 && computerScore <= 5) {
        playRound(e.target.value, getComputerChoice());
        game();
    } else {
        return;
    }

});

scissorsbutton.addEventListener("click", function(e) {
    if (playerScore <= 5 && computerScore <= 5) {
        playRound(e.target.value, getComputerChoice());
        game();
    } else {
        return;
    }
});




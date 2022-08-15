function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'rock') {
        document.getElementById("roundScore").innerHTML += " " + "That's a tie!";
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        playerScore += 1;
        document.getElementById("roundScore").innerHTML += "Player wins!";
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        computerScore += 1;
        document.getElementById("roundScore").innerHTML += " " + "Computer wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'paper') {
        document.getElementById("roundScore").innerHTML += " " + "That's a tie!";
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        playerScore += 1;
        document.getElementById("roundScore").innerHTML += " " + "Player wins!";
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        computerScore += 1;
        document.getElementById("roundScore").innerHTML += " " + "Computer wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'scissors') {
        document.getElementById("roundScore").innerHTML += " " + "That's a tie!";
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        playerScore += 1;
        document.getElementById("roundScore").innerHTML +=  " " + "Player wins!";
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        computerScore += 1;        
        document.getElementById("roundScore").innerHTML += " " + "Computer wins!";
    } else {
        document.getElementById("roundScore").innerHTML += " " + "Computer wins!";
    }
}

function game() {
    if (playerScore == 5 ) {
        document.getElementById("gameScore").textContent = document.getElementById("gameScore").textContent + " " + "You're so good... wowzers";
    } else if (computerScore ==5) {
        document.getElementById("gameScore").textContent = document.getElementById("gameScore").textContent + " " + "Defeated by luck... how does it feel?";
    } 
}


let rockbutton = document.getElementById("rockButton");
let paperbutton = document.getElementById("paperButton");
let scissorsbutton = document.getElementById("scissorsButton");

rockbutton.addEventListener("click", function(e) {
    if (playerScore <= 5 && computerScore <= 5) {
        playRound(e.target.value, getComputerChoice());
        gameRound++;
        game();
    } else {
        return;
    }
    
});

paperbutton.addEventListener("click", function(e) {
    if (playerScore <= 5 && computerScore <= 5) {
        playRound(e.target.value, getComputerChoice());
        gameRound++;
        game();
    } else {
        return;
    }

});

scissorsbutton.addEventListener("click", function(e) {
    if (playerScore <= 5 && computerScore <= 5) {
        playRound(e.target.value, getComputerChoice());
        gameRound++;
        game();
    } else {
        return;
    }
});



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

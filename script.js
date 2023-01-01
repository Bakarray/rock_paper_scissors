function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    return (choices[Math.floor(Math.random() * choices.length)])
}

function getPlayerChoice() {
    let input = '';
    while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
      input = prompt("Paper, rock or scissors").toLowerCase();
      if (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
        console.error("Invalid input: Enter 'rock', 'paper', or 'scissors'");
      }
    }
    return input;
  }
  

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = `it's a tie!!, you both played ${playerSelection}`;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
         (playerSelection === 'paper' && computerSelection === 'rock') || 
         (playerSelection === 'scissors' && computerSelection === 'paper')) {
            result = `You Win! ${playerSelection} beats ${computerSelection}`
         }
    else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    return (result)
}

function game() {
    computerScore = 0;
    playerScore = 0;

    for (let i = 0; i < 5; i++) {
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (roundResult.startsWith('You Win')) {
            playerScore++;
        }
        else if (roundResult.startsWith('You Lose')) {
            computerScore++;
        }
        console.log(result)
    }

    console.log("player score: " + playerScore + "\ncomputer score: " + computerScore)
    if (playerScore === computerScore) {
        console.log("It's a tie!!")
    }
    else if (playerScore > computerScore) {
        console.log("Congrats! You win!!")
    }

    else if (playerScore < computerScore) {
        console.log("Aww, the computer wins")
    }
}
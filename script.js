function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    return (choices[Math.floor(Math.random() * choices.length)])
}

function getPlayerChoice() {
    let input = prompt("Paper, rock or scissors").toLowerCase()

    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    }
    else {
        console.error("Invalid input: Enter 'rock', 'paper', or 'scissors'")
    }
}

function play(playerSelection, computerSelection) {
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

play(getPlayerChoice(), getComputerChoice())
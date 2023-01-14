function getComputerChoice() {
    const compSelect = document.getElementById('comp')
    choices = ['rock', 'paper', 'scissors'];
    choice = (choices[Math.floor(Math.random() * choices.length)])
    compSelect.textContent = choice;
    return choice;
}


function playRound(playerSelection, computerSelection) {
    const report = document.getElementById('report')
    const round = document.getElementById('round')
    if (playerSelection === computerSelection) {
        report.textContent = `It's a tie!!, you both played ${playerSelection}`;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
         (playerSelection === 'paper' && computerSelection === 'rock') || 
         (playerSelection === 'scissors' && computerSelection === 'paper')) {
            report.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
         }
    else {
        report.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    updateScore(report.textContent);
    roundCount++;
    round.textContent = `Round ${roundCount}`;

}

function updateScore(report) {
    const score = document.getElementById('score')
    if (report.startsWith('You Win')) {
        playerScore++;
    }
    else if (report.startsWith('You Lose')) {
        computerScore++;
    }
    

    score.textContent = `Computer:${computerScore} || User: ${playerScore}`
}

let computerScore = 0;
let playerScore = 0;
let roundCount = 1;

const options = document.querySelectorAll('button');
options.forEach((option) => {
    option.addEventListener('click', () => {
        playRound(option.id, getComputerChoice())
    })
})

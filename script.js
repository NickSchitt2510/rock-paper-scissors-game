// Change number to choice
function numberToChoice(number) {
    switch (number) {
        case 0:
            return "✊";
        case 1:
            return "✋";
        case 2:
            return '✌️';
    }
}


function generateComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumber %= 3;
    if(randomNumber === 0) {
        return 0; //0>2 "Rock"
    }
    else if(randomNumber === 1) {
        return 1; //1>0 "Paper"
    }
    else if(randomNumber === 2) {
        return 2; //2>1 "Scissors"
    }
}


function compareSelection(playerSelection, computerSelection) {
//computerSelection and playerSelection are numbers

    if (playerSelection === computerSelection) {
        return "Draw";
    }
    else if (playerSelection === 0 && computerSelection === 2 || playerSelection === 1 && computerSelection === 0 || playerSelection === 2 && computerSelection === 1) {
        playerScore++;
        return "Player Won This Round";
    }
    else if (playerSelection === 0 && computerSelection === 1 || playerSelection === 1 && computerSelection === 2 || playerSelection === 2 && computerSelection === 0) {
        computerScore++;
        return "Computer Won This Round";
    }
}


// Initialize score
let playerScore = 0;
let computerScore = 0;


function disableButtons() {
    const choices = document.querySelectorAll('.choices');
    choices.forEach((choice) => {
        choice.disabled = true;
    })
}


function announceWinner() {
    const ending = document.querySelector('.ending');
    // if either score reaches 5, announce the winner
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            ending.textContent = "Player Won the Game!";
            disableButtons();
        } else if (playerScore < computerScore) {
            ending.textContent = "Computer Won the Game!";
            disableButtons();
        }
    }
}

// When button is clicked, get the value of player's choice and get result
function playRound() {
    let playerSelection = +this.value;
    let computerSelection = generateComputerSelection();
    let result = compareSelection(playerSelection, computerSelection);
    
    // Display selections of both players using emoji
    const player = document.querySelector('.player');
    player.textContent = numberToChoice(playerSelection);
    
    const computer = document.querySelector('.computer');
    computer.textContent = numberToChoice(computerSelection)

    // Display round result
    result = `${result} \n ${playerScore} - ${computerScore}`;
    const roundResult = document.querySelector('.score');
    roundResult.textContent = result;
    // console.log(`Player - Computer: ${playerScore} - ${computerScore}`);
    
    announceWinner();
}


// start game only when user click a start
function startGame() {

    // Set up event listener. Click either button to playRound.
    const choices = document.querySelectorAll('.choices'); // return a node list
    choices.forEach((choice) => {
        choice.addEventListener('click', playRound);
    });

    
}

startGame();

// const start = document.querySelector('.start');
// start.addEventListener('click', startGame())

// function changeToGameUI() {
//     // element creation?

// }



// game();

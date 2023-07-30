// Initialize score
let playerScore = 0;
let computerScore = 0;

// Add a start button to start the game
function startGame() {

    // Transition to playing ui after clicking start button
    const start = document.querySelector('#start-game');
    start.addEventListener('click', () => {
        start.setAttribute('hidden', true);
        document.getElementById('play-game').removeAttribute('hidden');
    });

    // Set up event listener. Click either button to playRound.
    const choices = document.querySelectorAll('.choices'); // return a node list
    choices.forEach((choice) => {
        choice.addEventListener('click', playRound);
    });
}


function playRound() {
    // Get the value of player's choice
    let playerSelection = +this.value;
    let computerSelection = generateComputerSelection();

    // Play round and compare the selection of player and computer
    let result = compareSelection(playerSelection, computerSelection);
    
    // Display selections of both players using emoji
    const player = document.querySelector('#player');
    player.textContent = numberToChoice(playerSelection);
    
    const computer = document.querySelector('#computer');
    computer.textContent = numberToChoice(computerSelection)

    // Display round result and score
    const roundResult = document.querySelector('#result');
    roundResult.textContent = `${result}`;

    const score = document.querySelector('#score');
    score.textContent = `${playerScore} - ${computerScore}`;
    
    // if either score reaches 5, announce the winner
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
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
            return "You Won This Round";
        }
        else if (playerSelection === 0 && computerSelection === 1 || playerSelection === 1 && computerSelection === 2 || playerSelection === 2 && computerSelection === 0) {
            computerScore++;
            return "Computer Won This Round";
        }
    }


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


function announceWinner() {
    // Clear round result
    const roundResult = document.querySelector('#result');
    roundResult.textContent = '';

    // Show game result
    const ending = document.createElement('div');
    ending.setAttribute('id', 'ending');
    const section = document.querySelector('#game');
    section.appendChild(ending);
    
    const result = document.querySelector('#ending');
    if (playerScore > computerScore) {
        result.textContent = "You Won the Game!";
        disableButtons();
    } else if (playerScore < computerScore) {
        result.textContent = "Computer Won the Game!";
        disableButtons();
    }
    
    addPlayAgainButton();
}


function disableButtons() {
    const choices = document.querySelectorAll('.choices');
    choices.forEach((choice) => {
        choice.disabled = true;
    })
}


function addPlayAgainButton() {
    const button = document.createElement('button');
    button.classList.add('function-btn');
    button.textContent = 'Play Again';
    const section = document.querySelector('#game');
    section.appendChild(button);

    // Set up event listener to play again
    const againButton = document.querySelector('#game > button');
    againButton.addEventListener('click', restartGame);
}


function restartGame() {
    // Undo all elements changes
    removeAddedElements();
    document.querySelector('#score').textContent = '';
    document.querySelector('#result').textContent = '';
    document.querySelector('#player').textContent = '';
    document.querySelector('#computer').textContent = '';


    // Set up event listener for choices buttons.
    const choices = document.querySelectorAll('.choices');
    
    // Reset buttons
    choices.forEach((choice) => {
        choice.disabled = false;
    })

    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Click either button to playRound.
    choices.forEach((choice) => {
        choice.addEventListener('click', playRound);
    });
}


function removeAddedElements() {
    const game = document.querySelector('#game');
    console.log(game);
    removeAllChild(game);
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


startGame();
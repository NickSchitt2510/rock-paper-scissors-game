function getComputerChoice() {
    // Generate rock, paper, or stone
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


// Change text input to number
function choiceToNumber(choice) {
    // console.log(typeof(choice));
    let result;
    if (choice.toLowerCase() == "rock") {
        result = 0;
        return result;
    } else if (choice.toLowerCase() == "paper") {
        result = 1;
        return result;
    } else if (choice.toLowerCase() == "scissors") {
        result = 2;
        return result;
    } else {
        return false;
    }
}


// Change number to choice
function numberToChoice(number) {
    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return 'scissors';
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


// Initialize score
let playerScore = 0;
let computerScore = 0;

function compareSelection(playerSelection, computerSelection) {
//computerSelection and playerSelection are numbers

    if (playerSelection === computerSelection) {
        return "Draw";
    }
    else if (playerSelection === 0 && computerSelection === 2 || playerSelection === 1 && computerSelection === 0 || playerSelection === 2 && computerSelection === 1) {
        playerScore++;
        return "Player won";
    }
    else if (playerSelection === 0 && computerSelection === 1 || playerSelection === 1 && computerSelection === 2 || playerSelection === 2 && computerSelection === 0) {
        computerScore++;
        return "Computer won";
    }
}

// When button is clicked, get the value of player's choice and get result
function playRound() {
    let playerSelection = +this.value;
    console.log(`Player: ${playerSelection}`);
    let computerSelection = generateComputerSelection();
    console.log(`Computer: ${computerSelection}`);
    let result = compareSelection(playerSelection, computerSelection);
    console.log(result);
    result = `${result} \n ${playerScore} - ${computerScore}`;
    console.log(result);
    const div = document.querySelector('.score');
    div.textContent = result;
    console.log(`Player - Computer: ${playerScore} - ${computerScore}`);
    return result;
}


// start game only when user click a start
function startGame() {

    // Set up event listener. Click to playRound.
    const choices = document.querySelectorAll('.choices'); // return a node list
    choices.forEach((choice) => {
        choice.addEventListener('click', playRound);
    });

}

    
startGame();



// game();


// Pseudo code:
// get computer choice
// get user's choice
// compare the choices
// output win
// if won then win add win counter
// if lose then lose count
// if draw then one more game 
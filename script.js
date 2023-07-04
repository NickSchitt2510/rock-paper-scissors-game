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
    choice = choice.toLowerCase()
    switch (choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case 'scissors':
            return 2;
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

function playRound(playerSelection, computerSelection) {
    //computerSelection is number
    //playerSelection is string
    playerSelection = choiceToNumber(playerSelection)
    if (playerSelection === computerSelection) {
        return "Draw";
    }
    else if (playerSelection == 0 && computerSelection === 2 || playerSelection == 1 && computerSelection === 0 || playerSelection == 2 && computerSelection === 1) {
        return "Player won";
    }
    else if (playerSelection == 0 && computerSelection === 1 || playerSelection == 1 && computerSelection === 2 || playerSelection == 2 && computerSelection === 0) {
        return "Computer won";
    }
}


// Pseudo code:
// get computer choice
// get user's choice
// compare the choices
// output win
// if won then win add win counter
// if lose then lose count
// if draw then one more game 
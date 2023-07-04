function getComputerChoice() {
    // Generate rock, paper, or stone
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let computerChoice;
    randomNumber %= 3;
    if(randomNumber === 0) {
        computerChoice = "Rock";
    }
    else if(randomNumber === 1) {
        computerChoice = "Paper";
    }
    else if(randomNumber === 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

// Pseudo code:
// get computer choice
// get user's choice
// compare the choices
// output win
// if won then win add win counter
// if lose then lose count
// if draw then one more game 
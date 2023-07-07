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

// // Change text input to number
// function choiceToNumber(choice) {
//     // console.log(typeof(choice));
//     let result;
//     if (choice == "rock" || choice == "Rock") {
//         result = 0;
//         return result;
//     } else if (choice == "paper" || choice == "Paper") {
//         result = 1;
//         return result;
//     } else if (choice == "scissors" || choice == "Scissors") {
//         result = 2;
//         return result;
//     } else {
//         return false;
//     }
// }
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

function playRound(playerSelection, computerSelection) {
    //computerSelection and playerSelection are numbers

    if (playerSelection === computerSelection) {
        return "Draw";
    }
    else if (playerSelection === 0 && computerSelection === 2 || playerSelection === 1 && computerSelection === 0 || playerSelection === 2 && computerSelection === 1) {
        return "Player won";
    }
    else if (playerSelection === 0 && computerSelection === 1 || playerSelection === 1 && computerSelection === 2 || playerSelection === 2 && computerSelection === 0) {
        return "Computer won";
    }
    else {
        return "Weird";
    }
}

// let playerChoice = prompt("Choose your option", "Rock, Paper, or Scissors?");
// playerChoice = choiceToNumber(playerChoice);
// // console.log(playerChoice); //number

function game() {
    let roundCount = 0;
    while (roundCount < 5)
    {
        let playerChoice = prompt("Choose your option", "Rock, Paper, or Scissors?");
        console.log(playerChoice);
        playerChoice = choiceToNumber(playerChoice);
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        console.log(playRound(playerChoice, computerChoice));
        roundCount++;
    }
}

game();



// Pseudo code:
// get computer choice
// get user's choice
// compare the choices
// output win
// if won then win add win counter
// if lose then lose count
// if draw then one more game 
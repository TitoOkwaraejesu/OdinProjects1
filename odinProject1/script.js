//ROCK, PAPER AND SCISSORS

function computerSelection() {
    let selection = Math.floor(Math.random() * 10);

    if (selection == 1 || selection == 7 || selection == 5) {
        let selection = "rock"
        return selection;
    }
    else if (selection % 3 == 0) {
        let selection = "paper";
        return selection;
    }
    else {
        let selection = "scissors";
        return selection;
    }
}

// ask for user selection

function userSelection() {
    let selection = prompt("your turn");
    return selection;

}
//initialize scores
let userScore = 0;
let computerScore = 0;

//play a single round
function playRound(computerPlay, userPlay) {

    computerPlay = computerSelection();
    console.log(`computer: ${computerPlay}`);

    userPlay = userSelection();
    userPlay.toLowercase;
    console.log(`user: ${userPlay}`);

    if (computerPlay === userPlay) {
        console.log("it's a tie")
    }
    else if ((computerPlay === "scissors" && userPlay === "paper") || (computerPlay === "paper" && userPlay === "rock") || (computerPlay === "rock" && userPlay === "scissors")) {
        computerScore += 1;

        console.log("computer won this round");
    }
    else {
        userScore += 1;

        console.log("user won this round");
    }
}
//play a game of 5 rounds

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log(`computer score is ${computerScore}`);
    console.log(`user score is ${userScore}`);

    if (computerScore > userScore) {
        return "user lost"
    }
    else if (computerScore < userScore) {
        return "user wins"
    }
    else {
        return "WOW! it's a tie"
    }
}
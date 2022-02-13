function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound() {
    let playerSelection = prompt("Do you choose rock, paper, or scissors").toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        playerSelection = prompt("Uh oh! Please choose rock, paper, or scissors").toLowerCase();
    }
    let computerSelection = computerPlay();
    alert(`You chose ${playerSelection} and the computer chose ${computerSelection}`);
    let results = " "
    let message = " ";
    switch(true) {
        case playerSelection === "rock" && computerSelection === "rock":
            results = "tie";
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            results = "lose";
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
            results = "win";
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            results = "win";
            break;
        case playerSelection === "paper" && computerSelection === "paper":
            results = "tie";
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            results = "lose";
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            results = "lose";
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            results = "win";
            break;
        case playerSelection === "scissors" && computerSelection === "scissors":
            results = "tie";
            break;
    }
    switch(results) {
        case "win":
            message = "Congrats you win!";
            break;
        case "tie":
            message = "It's a draw!";
            break;
        case "lose":
            message = "Sorry, you lost!";
            break;
    }
    alert(message);
    //return results;

}
console.log(playRound());
function runGame() {
    let palyerScore = 0;
        let botScore = 0;
        let ties = 0;
    for (let i = 0; i < 5, i++;) {
        
        playRound();
        if (results = "win") {
            core++;
        } else if (results = "lose") {
            botScore++
        } else if (results = "tie") {
            console.log("You tied! Try that round again!");
            i--;
            ties++;
        }
        
    }
    switch(true) {
        case palyerScore > botScore:
            console.log(`Congrats! You won ${palyerScore} out of 5 rounds.`);
        case botScore > palyerScore:
            console.log(`Sorry, you lost! You wong ${palyerScore} out of 5 rounds`);
    }
}

runGame();
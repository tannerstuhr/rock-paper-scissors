
function runGame() {
    let playerScoreDisplay = document.getElementById("player-score");
    let playerScore = 0
    let botScore = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++) {
        
       var results = playRound();
        
        
        if (results === "win") {
            playerScore += 1;
            document.getElementById("player-score").firstChild.nodeValue = playerScore;
            
        } else if (results === "lose") {
            botScore++
        } else if (results === "tie") {
            console.log("You tied! Try that round again!");
            i--;
            ties++;
        }
        
        console.log("Your Score is " + playerScore);
        console.log("Computer score is " + botScore);
        
    }
    switch(true) {
        case playerScore > botScore:
            console.log(`Congrats! You won ${playerScore} out of 5 rounds.`);
        case botScore > playerScore:
            console.log(`Sorry, you lost! You wong ${playerScore} out of 5 rounds`); 
   }
}
function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound() {
    let playerSelection = prompt("please enter rock paper or scissors!")
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
    console.log(message);
    return results;

}


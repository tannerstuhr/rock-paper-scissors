
const possibleChoices = ["rock", "paper", "scissors"]
let botChoice
let playerChoice
let botScore = 0
let playerScore = 0

let buttons = document.querySelectorAll(".button");
const container = document.querySelector("#results-container");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerChoice = img.alt.toLowerCase();

        playRound(playerChoice, botChoice)

        if (playerScore === 5 || botScore === 5) {
            declareWinner();
        }
    });
});

function botPlay() {
    //let choice = possibleChoices[(Math.floor(Math.random() * possibleChoices.length))];
    //console.log(choice);
    //return choice
    
    return possibleChoices[~~(Math.random() * possibleChoices.length)];
}

function playRound(playerChoice, botChoice) {
    botChoice = botPlay();
    if(playerChoice == botChoice) {
        displayResults("It's a tie!");
    } else if ((botChoice == "rock" && playerChoice == "scissors") ||
              (botChoice == "paper" && playerChoice == "rock") ||
              (botChoice == "scissors" && playerChoice == "paper")
    ) {
        botScore++
        keepBotScore();
        switch(true) {
            case botScore === 1:
                displayResults(
                    `The bot chose ${botChoice} dummy. The bot got a point.`
                );
                break;
            case botScore === 2:
                displayResults(
                    `The bot chose ${botChoice} and 
                    you chose ${playerChoice}... so.. the bot gets another point.`
                );
                break;
            case botScore === 3:
                displayResults(
                    `Whelp. The bot chose ${botChoice} and that's definitely going to beat your ${playerChoice}.`
                );
                break;
            case botScore === 4:
                displayResults(
                    `Are you even trying? The bot chose ${botChoice} so it's one move from winning.`
                );
                break;
            default:
                displayResults(`${botChoice} beats ${playerChoice}`);
                break;
        }
    } else {
        playerScore++
        keepPlayerScore();
        switch(true) {
            case playerScore === 1:
                displayResults( 
                    `The bot chose ${botChoice}. Nice job!`
                );
                break;
            case playerScore === 2:
                displayResults(
                    `The bot chose ${botChoice}. There you go!`
                );
                break;
            case playerScore === 3:
                displayResults(
                    `The bot chose ${botChoice} that time. You're almost there! `
                );
                break;
            case playerScore === 4:
                displayResults(
                    `The bot chose ${botChoice}, you only need one more!`
                );
                break;
            default:
                displayResults(`${playerChoice} beats ${botChoice}`);
                break;
    }
   }
}
function displayResults(str) {
    container.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
    container.textContent = str;
  }

  function keepPlayerScore() {
      let playerScoreBox = document.querySelector("#player-score");

      playerScoreBox.animate([{ opacity: 0}, { opacity: 1}], {
          duration: 300,
          fill: "forwards",
          iterations: 1,
          delay: 0,
          easing: "ease-out",
         
      });

      playerScoreBox.textContent = playerScore;

  }

  function keepBotScore() {
      let botScoreBox = document.querySelector("#bot-score")

      botScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
      });
    
      botScoreBox.textContent = botScore;
  }

/*
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
*/

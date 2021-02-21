let playerScore = 0;
let computerScore = 0;

function game(playerChoice) {

        // -- Computer Selection --
        // Variable called computerPlay that randomly chooses rock, paper or scissors
        computerPlay = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        //console.log(computerPlay);

        // -- Player Selection --
        // This comes from clicking on the button with the playerChoice being passed in

        const playerSelection = playerChoice;
        const computerSelection = computerPlay;

        // If the player or computer score is already 5 then disable image changes else change
        if (playerScore == 5 || computerScore == 5) {
          return;
        } else {
          if (playerSelection === "rock") {
              document.getElementById("playerResult").src="images/rock.png";
          } else if (playerSelection === "scissors") {
              document.getElementById("playerResult").src="images/scissors.png";
          } else if (playerSelection === "paper") {
              document.getElementById("playerResult").src="images/paper.png";
          }

          if (computerSelection === "rock") {
              document.getElementById("computerResult").src="images/rock.png";
          } else if (computerSelection === "scissors") {
              document.getElementById("computerResult").src="images/scissors.png";
          } else if (computerSelection === "paper") {
              document.getElementById("computerResult").src="images/paper.png";
          }

        }

        // -- Play Round --
        function playRound (playerSelection, computerSelection) {
          // If the player or computer score is already 5 then call scoreCheck else play the round
          if (playerScore == 5 || computerScore == 5) {
            scoreCheck();
          } else {
            if (playerSelection === "rock" && computerSelection === "scissors") {
                    document.querySelector('.resultComment').innerHTML = '<p>You Win! Rock beats Scissors!</p>';
                    playerScore++;
                } else if (playerSelection === "paper" && computerSelection === "rock") {
                    document.querySelector('.resultComment').innerHTML = '<p>You Win! Paper beats Rock!</p>';
                    playerScore++;
                } else if (playerSelection === "scissors" && computerSelection === "paper") {
                    document.querySelector('.resultComment').innerHTML = '<p>You Win! Scissors beats Paper!</p>';
                    playerScore++;
                } else if (playerSelection === "rock" && computerSelection === "paper") {
                    document.querySelector('.resultComment').innerHTML = '<p>You Lose! Paper beats Rock!</p>';
                    computerScore++;
                } else if (playerSelection === "paper" && computerSelection === "scissors") {
                    document.querySelector('.resultComment').innerHTML = '<p>You Lose! Scissors beats Paper!</p>';
                    computerScore++;
                } else if (playerSelection === "scissors" && computerSelection === "rock") {
                    document.querySelector('.resultComment').innerHTML = '<p>You Lose! Rock beats Scissors!</p>';
                    computerScore++;
                } else if (playerSelection === computerSelection) {
                    document.querySelector('.resultComment').innerHTML = "<p>It's a Draw!</p>";
                  }
                scoreCheck();
              }
            }

            // -- Checks the Score --
            function scoreCheck() {
                // If either score is 5 show who won and add the Play Again button
                if (playerScore === 5 || computerScore === 5) {
                    if (playerScore == 5) {
                        document.querySelector('.choiceText').innerHTML = "<p>You Won!<p>";
                    } else if (computerScore == 5) {
                        document.querySelector('.choiceText').innerHTML = "<p>You Lose!<p>";
                    }

                    const container = document.querySelector('.container');

                    const content = document.createElement('div');
                    content.classList.add('content');
                    content.innerHTML = '<button class="playAgain" onClick="window.location.reload();">Play Again</button>';

                    container.appendChild(content);
                    return;
                }
            }

        // -- Console Log --
        //console.log("You selected " + playerSelection);
        //console.log("The computer selected " + computerSelection);
        //console.log(playRound(playerSelection, computerSelection));
        //console.log("Your score " + playerScore + ", computers score " + computerScore);
        //console.log(" ");

        playRound(playerSelection, computerSelection);
        playerScore;
        computerScore;

        document.querySelector('#playerScore').innerHTML = playerScore;
        document.querySelector('#computerScore').innerHTML = computerScore;

}
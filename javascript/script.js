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
        
        // -- Play Round --
            function playRound (playerSelection, computerSelection) {

                if (playerSelection === "rock" && computerSelection === "scissors") {
                    document.querySelector('.resultComment').innerHTML = 'You Win! Rock beats Scissors!';
                    playerScore++;
                    return "You Win! Rock beats Scissors!";
                    } else if (playerSelection === "paper" && computerSelection === "rock") {
                        document.querySelector('.resultComment').innerHTML = 'You Win! Paper beats Rock!';
                        playerScore++;
                        return "You Win! Paper beats Rock!";
                    } else if (playerSelection === "scissors" && computerSelection === "paper") {
                        document.querySelector('.resultComment').innerHTML = 'You Win! Scissors beats Paper!';
                        playerScore++;
                        return "You Win! Scissors beats Paper!"; 
                    } else if (playerSelection === "rock" && computerSelection === "paper") {
                        document.querySelector('.resultComment').innerHTML = 'You Lose! Paper beats Rock!';
                        computerScore++;
                        return "You Lose! Paper beats Rock!"; 
                    } else if (playerSelection === "paper" && computerSelection === "scissors") {
                        document.querySelector('.resultComment').innerHTML = 'You Lose! Scissors beats Paper!';
                        computerScore++;
                        return "You Lose! Scissors beats Paper!";
                    } else if (playerSelection === "scissors" && computerSelection === "rock") {
                        document.querySelector('.resultComment').innerHTML = 'You Lose! Rock beats Scissors!';
                        computerScore++;
                        return "You Lose! Rock beats Scissors!";  
                    } else if (playerSelection === computerSelection) {
                        document.querySelector('.resultComment').innerHTML = "It's a Draw!";
                        return "It's a Draw!"; 
                    }

                    
                }
               


        // -- Console Log --
        console.log("You selected " + playerSelection);
        console.log("The computer selected " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score " + playerScore + ", computers score " + computerScore);
        console.log(" ");

        document.querySelector('#playerScore').innerHTML = playerScore;
        document.querySelector('#computerScore').innerHTML = computerScore;

        if (playerScore == 5 || computerScore == 5) {
            const container = document.querySelector('.container');

            const content = document.createElement('div');
            content.classList.add('content');
            content.innerHTML = '<button class="playAgain" onClick="window.location.reload();">Play Again</button>';

            container.appendChild(content);


            if (playerScore == 5) {
                document.querySelector('.choiceText').innerHTML = "<p>You Won!<p>";
            } else if (computerScore == 5) {
                document.querySelector('.choiceText').innerHTML = "<p>You Lose!<p>";
            }
            
        }

    
}
        


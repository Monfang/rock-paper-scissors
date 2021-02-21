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

        if (playerSelection === "rock" && !(playerScore == 5 || computerScore == 5)) {
            document.getElementById("playerResult").src="images/rock.png";
        } else if (playerSelection === "scissors" && !(playerScore == 5 || computerScore == 5)) {
            document.getElementById("playerResult").src="images/scissors.png";
        } else if (playerSelection === "paper" && !(playerScore == 5 || computerScore == 5)) {
            document.getElementById("playerResult").src="images/paper.png";
        }

        if (computerSelection === "rock" && !(playerScore == 5 || computerScore == 5)) {
            document.getElementById("computerResult").src="images/rock.png";
        } else if (computerSelection === "scissors" && !(playerScore == 5 || computerScore == 5)) {
            document.getElementById("computerResult").src="images/scissors.png";
        } else if (computerSelection === "paper" && !(playerScore == 5 || computerScore == 5)) {
            document.getElementById("computerResult").src="images/paper.png";
        }
        
        // -- Play Round --
            function playRound (playerSelection, computerSelection) {


                if (playerSelection === "rock" && computerSelection === "scissors" && !(playerScore >= 5 || computerScore >= 5)) {
                        document.querySelector('.resultComment').innerHTML = '<p>You Win! Rock beats Scissors!</p>';
                        playerScore++;
                        scoreCheck();
                        return "You Win! Rock beats Scissors!";
                    } else if (playerSelection === "paper" && computerSelection === "rock" && !(playerScore >= 5 || computerScore >= 5)) {
                        document.querySelector('.resultComment').innerHTML = '<p>You Win! Paper beats Rock!</p>';
                        playerScore++;
                        scoreCheck();
                        return "You Win! Paper beats Rock!";
                    } else if (playerSelection === "scissors" && computerSelection === "paper" && !(playerScore >= 5 || computerScore >= 5)) {
                        document.querySelector('.resultComment').innerHTML = '<p>You Win! Scissors beats Paper!</p>';
                        playerScore++;
                        scoreCheck();
                        return "You Win! Scissors beats Paper!"; 
                    } else if (playerSelection === "rock" && computerSelection === "paper" && !(playerScore >= 5 || computerScore >= 5)) {
                        document.querySelector('.resultComment').innerHTML = '<p>You Lose! Paper beats Rock!</p>';
                        computerScore++;
                        scoreCheck();
                        return "You Lose! Paper beats Rock!"; 
                    } else if (playerSelection === "paper" && computerSelection === "scissors" && !(playerScore >= 5 || computerScore >= 5)) {
                        document.querySelector('.resultComment').innerHTML = '<p>You Lose! Scissors beats Paper!</p>';
                        computerScore++;
                        scoreCheck();
                        return "You Lose! Scissors beats Paper!";
                    } else if (playerSelection === "scissors" && computerSelection === "rock" && !(playerScore >= 5 || computerScore >= 5)) {
                        document.querySelector('.resultComment').innerHTML = '<p>You Lose! Rock beats Scissors!</p>';
                        computerScore++;
                        scoreCheck();
                        return "You Lose! Rock beats Scissors!";  
                    } else if (playerSelection === computerSelection && !(playerScore >= 5 || computerScore >= 5)) {
                        document.querySelector('.resultComment').innerHTML = "<p>It's a Draw!</p>";
                        return "It's a Draw!"; 
                    }

                    
                }

            function scoreCheck () {

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
        


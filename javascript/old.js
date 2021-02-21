function game() {

    let round = 1;
    let playerScore = 0;
    let computerScore = 0;

        // -- Computer Selection --  
        // Variable called computerPlay that randomly chooses Rock, Paper or Scissors
        let computerPlay = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        //console.log(computerPlay);    
    
        // -- Player Selection --
        // Prompt user for input, capitalise first letter in string
        let playerPrompt = prompt("Round " + round + ": Please choose Rock, Paper or Scissors");
        let playerChoice = playerPrompt.charAt(0).toLowerCase() + playerPrompt.slice(1).toLowerCase();  
        //console.log(playerChoice);

        // -- Play Round --
        function playRound (playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                return "You Win! Rock beats Scissors!";
                } else if (playerSelection === "paper" && computerSelection === "rock") {
                    playerScore++;
                    return "You Win! Paper beats Rock!";
                } else if (playerSelection === "scissors" && computerSelection === "paper") {
                    playerScore++;
                    return "You Win! Scissors beats Paper!"; 
                } else if (playerSelection === "rock" && computerSelection === "raper") {
                    computerScore++;
                    return "You Lose! Paper beats Rock!"; 
                } else if (playerSelection === "paper" && computerSelection === "scissors") {
                    computerScore++;
                    return "You Lose! Scissors beats Paper!";
                } else if (playerSelection === "scissors" && computerSelection === "rock") {
                    computerScore++;
                    return "You Win! Rock beats Scissors!";  
                } else if (playerSelection === computerSelection) {
                    return "It's a Draw!"; 
                }
            }
    
        const playerSelection = playerChoice;
        const computerSelection = computerPlay;

        // -- Console Log --
        console.log("You selected " + playerSelection);
        console.log("The computer selected " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score " + playerScore + ", computers score " + computerScore);
        console.log(" ");

    
}

// -- Game Function --
game();

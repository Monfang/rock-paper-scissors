function game() {

    let round = 1;
    let playerScore = 0;
    let computerScore = 0;

        // -- Computer Selection --  
        // Variable called computerPlay that randomly chooses Rock, Paper or Scissors
        let computerPlay = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
        //console.log(computerPlay);    
    
        // -- Player Selection --
        // Prompt user for input, capitalise first letter in string
        let playerPrompt = prompt("Round " + round + ": Please choose Rock, Paper or Scissors");
        let playerChoice = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
        function capitalise(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }      
        //console.log(playerChoice);

        // -- Play Round --
        function playRound (playerSelection, computerSelection) {
            if (playerSelection === "Rock" && computerSelection === "Scissors") {
                playerScore++;
                return "You Win! Rock beats Scissors!";
                } else if (playerSelection === "Paper" && computerSelection === "Rock") {
                    playerScore++;
                    return "You Win! Paper beats Rock!";
                } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                    playerScore++;
                    return "You Win! Scissors beats Paper!"; 
                } else if (playerSelection === "Rock" && computerSelection === "Paper") {
                    computerScore++;
                    return "You Lose! Paper beats Rock!"; 
                } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                    computerScore++;
                    return "You Lose! Scissors beats Paper!";
                } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
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
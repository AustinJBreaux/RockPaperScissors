/*Declares global variables*/
let playerWinCounter = 0;
let computerWinCounter = 0;

/*Chooses a random number between 1-3, and based on that logs rock/paper/scissors to the console*/
let getComputerChoice = function randomChoice(){
    let currentRoundChoice = Math.floor(Math.random()*3)+1;
    if(currentRoundChoice === 1){
        return currentRoundChoice = 1;
    }
    else if(currentRoundChoice === 2){
        return currentRoundChoice = 2;
    }
    else if(currentRoundChoice === 3){
        return currentRoundChoice = 3;
    }
}

/*Get player's input, and test it against the random computer choice*/
let getPlayerChoice = function playerChoice(){
    let playerAnswer = prompt("Please choose between rock, paper, or scissors","Rock, Paper, Scissors");
    let op1 = "rock";
    let op2 = "paper";
    let op3 = "scissors";
    let playerResponse = playerAnswer.toLowerCase();
    if(playerResponse === op1 || playerResponse === op2
    || playerResponse === op3){
        switch(getComputerChoice()){
            case 1: /*Comp rock*/
                    if(playerResponse === op1){/*Player rock*/
                        return "It's a tie!"
                    }
                    else if(playerResponse === op2){/*Player paper*/
                        playerWinCounter +=1;
                        }
                    else if(playerResponse === op3){/*Player scissors*/
                        computerWinCounter +=1;
                    }
                    else{
                        console.log("Error")
                    }
                break;
            case 2:/*Comp paper */
                    if(playerResponse === op1){ /*Player rock*/
                        computerWinCounter +=1;
                    }
                    else if(playerResponse === op2){/*Player paper*/
                        return "It's a tie!"
                    }
                    else if(playerResponse === op3){/*Player scissors*/
                            playerWinCounter +=1;
                        }
                    else{
                        console.log("Error")
                    }
                break;
            case 3:/*Comp scissors*/
                    if(playerResponse === op1){
                        playerWinCounter +=1;
                        }
                    else if(playerResponse === op2){/*Player paper*/
                        computerWinCounter +=1;
                    }
                    else if(playerResponse === op3){/*Player scissors*/
                        return "It's a tie!"
                    }
                    else{
                        console.log("Error")
                    }
                break;
        }
    }
    else{
        console.log("Please check your spelling and try again");
        getPlayerChoice();
    }
}

/*Function to start the game */
playGame = function gameStart(){
    do{
        console.log(`Player:${playerWinCounter}. Computer:${computerWinCounter}`)
        getPlayerChoice();
    }
    while(playerWinCounter < 5 || computerWinCounter < 5){
        if(playerWinCounter === 5){
            return "Congrats! You win! Play again?"
        }
        else if(computerWinCounter === 5){
            return "Computer wins! Better luck next time!"
        }
        else{
            return "Error at end game"
        }
    }
}
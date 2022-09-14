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
let getPlayerChoice = function playerChoice(){
    let playerAnswer = prompt("Please choose between rock, paper, or scissors","Rock, Paper, Scissors");
    let op1 = "rock";
    let op2 = "paper";
    let op3 = "scissors";
    let playerResponse = playerAnswer.toLowerCase();
    if(playerResponse === op1 || playerResponse === op2
    || playerResponse === op3){
        getComputerChoice();
        switch(getComputerChoice()){
            case 1: /*Comp rock*/
                    if(playerResponse === op1){
                        return "It's a tie!"
                    }
                    else if(playerResponse === op2){
                        return "Player wins!"
                    }
                    else if(playerResponse === op3){
                        return "Computer wins!"
                    }
                    else{
                        console.log("Error")
                    }
                break;
            case 2:/*Comp paper */
                    if(playerResponse === op1){
                        return "Computer wins!!"
                    }
                    else if(playerResponse === op2){
                        return "It's a tie!"
                    }
                    else if(playerResponse === op3){
                        return "Player Wins!"
                    }
                    else{
                        console.log("Error")
                    }
                break;
            case 3:/*Comp scissors*/
                    if(playerResponse === op1){
                        return "Player wins!"
                    }
                    else if(playerResponse === op2){
                        return "Computer wins!"
                    }
                    else if(playerResponse === op3){
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
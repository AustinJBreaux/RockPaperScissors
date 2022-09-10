 /*Chooses a random number between 1-3, and based on that logs rock/paper/scissors to the console*/
let getComputerChoice = function randomChoice(){
    let currentRoundChoice = Math.floor(Math.random()*3)+1;
    if(currentRoundChoice === 1){
        return console.log(rock);
    }
    else if(currentRoundChoice === 2){
        return console.log(paper);
    }
    else if(currentRoundChoice === 3){
        return console.log(scissors);
    }
}
let getPlayerChoice = function playerChoice(){
    let playerAnswer = prompt("Please choose between rock, paper, or scissors","Rock, Paper, Scissors");
    playerResponse = playerAnswer.toLowerCase().toString();
    if(playerResponse === "rock" || "paper" ||"scissors"){
        console.log(playerResponse);
    }
    else{
        console.log("Please check your spelling and try again");
        getPlayerChoice();
    }
}
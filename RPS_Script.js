 /*Chooses a random number between 1-3*/
let getComputerChoice = function randomChoice(){
    let currentRoundChoice = Math.floor(Math.random()*3)+1;
    if(currentRoundChoice === 1){
        return console.log(Rock);
    }
    else if(currentRoundChoice === 2){
        return console.log(Paper);
    }
    else if(currentRoundChoice === 3){
        return console.log(Scissors);
    }
}
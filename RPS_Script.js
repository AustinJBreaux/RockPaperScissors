/*Declares global variables*/
let playerWinCounter = 0;
let computerWinCounter = 0;

//window.addEventListener('click', function(e){
    //console.log(e);
//})
document.addEventListener('click', function(e){
    ///*
    if(e.target.tagName != 'BUTTON'){
        return;
    }
    else{
        let playerResponse = e.target.className;
        gameStart(playerResponse);
    }
    //*/
   //console.log(e);   
});

/*

/*Function to start the game */
playGame = function gameStart(e){
    do{
        console.log(`Player:${playerWinCounter}. Computer:${computerWinCounter}`)
        getPlayerChoice(playerResponse);
    }
    while(playerWinCounter <= 5 || computerWinCounter <= 5){
        if(playerWinCounter === 5){
            return `Congrats! You win! Final score is ${playerWinCounter} to ${computerWinCounter}. Play again?`;
        }
        else if(computerWinCounter === 5){
            return `Computer wins! Better luck next time! Final score is ${computerWinCounter} to ${playerWinCounter}. Play again?`
        }
        else{
            return "Error at end game"
        }
    }
}

/*Gets player choice based on button click*/
let getPlayerChoice = function playerChoice(e){
    if(playerResponse = 'rock'){
        chooseWinner(playerResponse);
    }
    else if(playerResponse = 'paper'){
        chooseWinner(playerResponse);
    }
    else if(playerResponse = 'scissors'){
        chooseWinner(playerResponse);
    }
    else return;
}

/*Gets the computer's random choice, then chooses a winner*/
const chooseWinner = function chooseWinner(){
    switch(getComputerChoice()){
        case 1: /*Comp rock*/
                if(playerResponse === "rock"){/*Player rock*/
                    return console.log("It's a tie!")
                }
                else if(playerResponse === "paper"){/*Player paper*/
                    playerWinCounter +=1;
                    }
                else if(playerResponse === "scissors"){/*Player scissors*/
                    computerWinCounter +=1;
                }
                else{
                    console.log("Error")
                }
            break;
        case 2:/*Comp paper */
                if(playerResponse === "rock"){ /*Player rock*/
                    computerWinCounter +=1;
                }
                else if(playerResponse === "paper"){/*Player paper*/
                    return console.log("It's a tie!")
                }
                else if(playerResponse === "scissors"){/*Player scissors*/
                        playerWinCounter +=1;
                    }
                else{
                    console.log("Error")
                }
            break;
        case 3:/*Comp scissors*/
                if(playerResponse === "rock"){
                    playerWinCounter +=1;
                    }
                else if(playerResponse === "paper"){/*Player paper*/
                    computerWinCounter +=1;
                }
                else if(playerResponse === "scissors"){/*Player scissors*/
                    return console.log("It's a tie!")
                }
                else{
                    console.log("Error")
                }
            break;
    }
}

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

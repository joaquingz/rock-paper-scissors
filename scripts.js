function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
  }

function getComputerChoice(){
    let random = getRandomInt(3);
    let choice = '';

    if (random == 0){
        choice = 'rock';
    }
    else if(random == 1){
        choice = 'paper';

    }
    else{
        choice = 'scissors';
    }
    
    return choice;
}

function playRound(playerSelection, computerChoice){
    //tie
    if(playerSelection == computerChoice){
        console.log('Tie, you both chose the same thing!')
    }
    //player loses
    else if((playerSelection === 'rock' && computerChoice === 'paper') || (playerSelection === 'paper' && computerChoice === 'scissors') || (playerSelection === 'scissors' && computerChoice === 'rock')){
        console.log('You loose, ' +computerChoice+ ' beats ' +playerSelection+ '.');
    }
    //player wins
    else if((playerSelection == 'rock' && computerChoice == 'scissors') || (playerSelection === 'paper' && computerChoice === 'rock') || (playerSelection === 'scissors' && computerChoice === 'paper')){
        console.log('You win!');
    }
}

function playGame(){
    
}

const computerChoice = getComputerChoice();

const playerSelection = prompt('Choose between Rock, Paper and Scissors');
playerSelection.toLowerCase();

playRound(playerSelection,computerChoice);





const button = document.querySelector('.button');
const buttonText = button.innerHTML;
let playerChoice;

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
    if(playerSelection === computerChoice){
        alert('Tie, you both chose the same thing!')
    }
    //player loses
    else if((playerSelection === 'rock' && computerChoice === 'paper') || (playerSelection === 'paper' && computerChoice === 'scissors') || (playerSelection === 'scissors' && computerChoice === 'rock')){
        alert('You loose, ' +computerChoice+ ' beats ' +playerSelection+ '.');
    }
    //player wins
    else if((playerSelection == 'rock' && computerChoice == 'scissors') || (playerSelection === 'paper' && computerChoice === 'rock') || (playerSelection === 'scissors' && computerChoice === 'paper')){
        alert('You win!');
    }
}

function playGame(playerSelection, computerChoice){
    for(let i = 0; i >=5; i++){
        playRound(playerSelection, computerChoice);
    };
}

const computerChoice = getComputerChoice();

button.addEventListener('click', function(){
    playerChoice = buttonText.toLocaleLowerCase();
    playRound(playerChoice,computerChoice);
});
// generate rock, paper scissors at random..
const computerPlay = () => {
    const rockPaperSci = ['rock', 'paper', 'scissors'];
    const out = [];
    const elements = 1;

    for (let i = 0; i < elements; i++) {
        out.push(
            ...rockPaperSci.splice(Math.floor(Math.random() * rockPaperSci.length), 1)
        );
    }
    return out.toString().toLowerCase();
}

//A round of Rock, Paper, Scissors to determine a winner

const playRound = (computerSelection, playerSelection) => {
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    return 'You lose! Rock beats scissors'
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return 'You lose! Paper beats Rock'
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
      return 'You lose scissors beats paper'
    
  } else if (playerSelection === computerSelection) {
      return `Its a tie, you both picked ${computerSelection}`
  }
  else {
    return `You win! ${playerSelection} beats ${computerSelection}`
  }
}

const computerSelection = computerPlay()

const playerSelection = prompt(
  'Enter, Rock, Paper or scissors'
).toLocaleLowerCase()

if (
  (playerSelection !== 'rock',
  playerSelection !== 'paper',
  playerSelection !== 'scissors')
) {
    alert('Please enter Rock, Paper or Scissors')
    for (let i = 0; i < playerSelection.length; i++){
        playerSelection = prompt('Enter, Rock, Paper or scissors').toLocaleLowerCase()

    }
  



}

playRound(computerSelection, playerSelection)


// generate rock, paper scissors at random..
let playerScore = 0
let compScore = 0

const computerPlay = () => {
  const rockPaperSci = ['rock', 'paper', 'scissors']
  const out = []
  const elements = 1

  for (let i = 0; i < elements; i++) {
    out.push(
      ...rockPaperSci.splice(Math.floor(Math.random() * rockPaperSci.length), 1)
    )
  }
  return out.toString().toLowerCase()
}

//A round of Rock, Paper, Scissors to determine a winner

const playRound = (computerSelection, playerSelection) => {
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    compScore++
    return 'You lose! Rock beats scissors'
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    compScore++
    return 'You lose! Paper beats Rock'
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    compScore++
    return 'You lose scissors beats paper'
  } else if (playerSelection === computerSelection) {
    return `Its a tie, you both picked ${computerSelection}`
  } else {
    playerScore++
    return `You won! ${playerSelection} beats ${computerSelection}`
  }
}

//five rounds of Rock, Paper, Scissors to determine a winner

const playerSelection = prompt(
  'Enter, Rock, Paper or scissors'
).toLocaleLowerCase()

const game = () => {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay()
    console.log(playRound(computerSelection, playerSelection))
  }
  if (playerScore > compScore) {
    console.log('You win!')
  } else if (compScore > playerScore) {
    console.log('You lose')
  }
}
game()

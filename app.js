const computerPlay = () =>  {
    const rockPaperSci = ["Rock", "Paper", "Scissors"]
const out = []
const elements = 1

    for (let i = 0; i < elements; i++) {
        out.push(...rockPaperSci.splice(Math.floor(Math.random() * rockPaperSci.length),1));
    }
 console.log(out.toString())
}

computerPlay()

const playRounds = (playerSelection, computerSelection) => {

}





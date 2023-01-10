const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let playerChoice;
let computerChoice;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    playerChoice = button.textContent;
    computerAction();
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    resultText.textContent = checkWinner();
}));

function computerAction()
{
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    switch(randomNumber)
    {
        case 1:
            computerChoice = "ROCK";
        break;

        case 2:
            computerChoice = "PAPER"
        break;
        case 3:
            computerChoice = "SCISSORS"
        break;
    }
}

function checkWinner()
{
    if(playerChoice == computerChoice)
    {
        return "Draw";
    }
    else if(computerChoice == "ROCK")
    {
        return (playerChoice == "PAPER") ? "Player Wins" : "Player Loses"
    }
    else if(computerChoice == "PAPER")
    {
        return (playerChoice == "SCISSORS") ? "Player Wins" : "Player Loses"
    }
    else if(computerChoice == "SCISSORS")
    {
        return (playerChoice == "ROCK") ? "Player Wins" : "Player Loses"
    }
}
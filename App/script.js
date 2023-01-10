const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let playerChoice;
let computerChoice;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    playerChoice = button.textContent;
    computerChoice();
}));

function computerChoice()
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
            computerChoice = "SCISSOR"
        break;
    }
}
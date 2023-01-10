const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  //Play the game
  //Play five rounds (best of five rounds)
  //based in the console
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  countWins();
}

function playRound(round) {
  // Takes two arguments from Selection
  // Compares those arguments to determine a winner of a round
  // Increments a value in that keeps track of total round wins for both computer and player repectively

  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  countRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let playerInput = prompt("Type Rock, Paper, or Scissors");
  while (playerInput == null) {
    playerInput = prompt("Type Rock, Paper, or Scissors");
  }
  playerInput = playerInput.toLowerCase();
  let validate = validatePlayerInput(playerInput);
  while (validate == false) {
    playerInput = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
    );
    while (playerInput == null) {
      playerInput = prompt("Type Rock, Paper, or Scissors");
    }
    playerInput = playerInput.toLowerCase();
    validate = validatePlayerInput(playerInput);
  }
  return playerInput;
}

function computerChoice() {
  //get a random input from the computer

  return choices[Math.floor(Math.random() * choices.length)];
}

function validatePlayerInput(choice) {
  return choices.includes(choice);
}

function checkWinner(pChoice, cChoice) {
  if (pChoice === cChoice) {
    return "Tie";
  } else if (
    (pChoice == "rock" && cChoice == "scissors") ||
    (pChoice == "paper" && cChoice == "rock") ||
    (pChoice == "scissors" && cChoice == "paper")
  ) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}

function countWins() {
  let playerWins = winners.filter((item) => item == "Player Wins").length;
  let computerWins = winners.filter((item) => item == "Computer Wins").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

function countRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("-------------------------------");
}

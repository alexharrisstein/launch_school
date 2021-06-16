const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  console.log(`You chose ${choice}. Computer chose ${computerChoice}.`);
  if ((choice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (choice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
      (choice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
      (choice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
      (choice === "spock" && (computerChoice === "scissors" || computerChoice === "rock" ))) {
    prompt("You win!");
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Not a valid choice. Try again.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? yes or no ");
  let proceed = readline.question();

  while ((proceed.toLowerCase() !== "yes") && (proceed.toLowerCase() !== "no")) {
    prompt("Type yes or no.");
    proceed = readline.question();
  }

  if (proceed === "no") {
    prompt("Goodbye!");
    break;
  }

  console.clear();
}
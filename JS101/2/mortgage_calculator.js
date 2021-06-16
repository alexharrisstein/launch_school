const readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number <= 0 || number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculateMonthlyPayment(loanAmount,annualPercentageRate,
  loanDurationInYears) {
  let loanDurationInMonths = Number(loanDurationInYears) * 12;
  let monthlyPercentageRate = ((Number(annualPercentageRate)) / 100) / 12;
  let monthlyPayment = Number(loanAmount) *
    (monthlyPercentageRate / (1 - Math.pow((1 + monthlyPercentageRate),
      (-loanDurationInMonths))));
  return monthlyPayment.toFixed (2);
}

prompt("Welcome to the Mortgage Calculator!");

while (true) {
  prompt("What is the loan amount?");
  let loanAmount = readline.question( );
  while (invalidNumber(loanAmount)) {
    prompt("Please enter a number greater than zero.");
    loanAmount = readline.question( );
  }

  prompt("What is the Annual Percentage Rate (APR)? Enter as a percentage.");
  let annualPercentageRate = readline.question( );
  while (invalidNumber(annualPercentageRate)) {
    prompt("Please enter a number greater than zero.");
    annualPercentageRate = readline.question( );
  }

  prompt("What is the loan duration in years?");
  let loanDurationInYears = readline.question( );
  while (invalidNumber(loanDurationInYears)) {
    prompt("Please enter a number greater than zero.");
    loanDurationInYears = readline.question( );
  }

  let payment = calculateMonthlyPayment(loanAmount, annualPercentageRate,
    loanDurationInYears);

  console.log ("***Your monthly payment will be $" + payment + ".***");

  prompt ("Would you like to do another calculation? Type yes or no.");
  let proceed = readline.question ();

  while (proceed.toLowerCase() !== "yes" && proceed.toLowerCase() !== "no") {
    prompt ("Type yes or no.");
    proceed = readline.question();
  }

  if (proceed.toLowerCase() === "no") {
    prompt ("Goodbye!");
    break;
  }

  console.clear();
}
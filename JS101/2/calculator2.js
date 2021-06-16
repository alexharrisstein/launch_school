// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return (num.trimStart() === "" || Number.isNaN(Number(num)));
}

prompt("Welcome to the Calculator!");
while (true) { 
  prompt("What is the first number?");
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt ("Not a valid number. Try again.");
    number1 = readline.question();
  }
  
  prompt("What is the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt ("Not a valid number. Try again.");
    number2 = readline.question();
  }

  prompt("What operation would you like to perform?\n1)addition 2)subtraction 3)multiplication 4)division");
  let operation = readline.question();
  let output;

  while (!["1", "2", "3", "4"].includes(operation)) {
    console.log("Must be 1, 2, 3, or 4. Try again.");
    operation = readline.question();
  }

  switch (operation) {
    case "1":
      output = `${number1} + ${number2} = ${Number(number1) + Number(number2)}.`;
      break;
    case "2":
      output = `${number1} - ${number2} = ${Number(number1) - Number(number2)}.`;
      break;
    case "3":
      output = `${number1} * ${number2} = ${Number(number1) * Number(number2)}.`;
      break; 
    case "4":
      output = `${number1} / ${number2} = ${Number(number1) / Number(number2)}.`;
      break;
  }    

  console.log(output);

  prompt("Would you like to perform another calculation? (yes or no)");
  let proceed = readline.question();

  while (proceed.toLowerCase() !== "yes" && proceed.toLowerCase() !== "no") {
    console.log ("Please type yes or no.");
    proceed = readline.question();
  }

  if (proceed.toLowerCase() === "no") { 
    prompt ("Goodbye!");
    break;
  }
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function getNumbers(prompt) {
  let scanner = require("readline-sync");
  let gitNumber = parseFloat(scanner.question(prompt));
  return gitNumber;
}

let firstNumber = getNumbers("Enter the first number: ");
let secondNumber = getNumbers("Enter the second number: ");
console.log(firstNumber + " * " + secondNumber + " = " + multiply(firstNumber, secondNumber)); 
/*Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566*/
function multiply (a, b) {
  return a * b;
}

function getNumbers(prompt) {
  let rlSync = require('readline-sync');
let number = parseFloat(rlSync.question(prompt));
return number;  
}
let a = getNumbers("Enter the first number: ");
let b = getNumbers("Enter the second number: ");
console.log(a + " * " + b + " = " + multiply(a, b));

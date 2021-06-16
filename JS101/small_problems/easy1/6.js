let readline = require('readline-sync');

function computeSum(num) {
  let sum = 0;
  for (let index = 1; index <= num; index++) {
    sum += index;
  }
  console.log(`The sum of the integers between 1 and ${num} i s ${sum}.`);
}

function computeProduct(num) {
  let product = 1;
  for (let index = 1; index <= num; index++) {
    product *= index;
  }
  console.log(`The product of the integers between 1 and ${num} i s ${product}.`);
}

console.log('Please enter an integer greater than 0: ');
let number = parseInt(readline.prompt(), 10);
console.log('Enter "s" to compute the sum or "p" to compute the product.');
let operation = readline.prompt();

if (operation === 's') {
  computeSum(number);
} else if (operation === 'p') {
  computeProduct(number);
} else {
  operation = readline.question('Enter "s" to compute the sum or "p" to compute the product.');
}
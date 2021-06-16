let readline = require('readline-sync');
let arr = [];

arr.push(readline.question('Enter the first number: '));
arr.push(readline.question('Enter the second number: '));
arr.push(readline.question('Enter the third number: '));
arr.push(readline.question('Enter the fourth number: '));
arr.push(readline.question('Enter the fifth number: '));
let last = readline.question('Enter the last number: ');
if (arr.includes(last)) {
  console.log(`The number ${last} appears in ${arr.join(',')}.`);
} else {
  console.log(`The number ${last} does not appear in ${arr.join(',')}.`);
}
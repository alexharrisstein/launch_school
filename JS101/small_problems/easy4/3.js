let readline = require('readline-sync');

let today = new Date();
let currentYear = today.getFullYear();

let age = Number(readline.question('What is your age? '));
let retireAt = Number(readline.question('At what age would you like to retire? '));

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retireAt - age)}.`);
console.log(`You have only ${retireAt - age} years of work to go!`);
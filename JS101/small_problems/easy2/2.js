let readline = require('readline-sync');
let name = readline.question('What is your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, name.length).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
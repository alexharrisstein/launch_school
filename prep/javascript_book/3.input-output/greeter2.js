function getNames (prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let first = getNames("What is your first name?");
let last = getNames("What is your last name?");
console.log(`Hello, ${first} ${last}!`); 
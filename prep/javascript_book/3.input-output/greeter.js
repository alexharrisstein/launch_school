function getNames(prompt) {
  let rlSync = require("readline-sync");
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getNames("What is your first name?\n");
let lastName = getNames("What is your last name?\n");
console.log("Good Morning, " + firstName + " " + lastName + "!");
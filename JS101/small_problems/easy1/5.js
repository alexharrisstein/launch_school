let rlSync = require("readline-sync");

function tipCalculator (billAmount, tipPercent) {
  let tip = billAmount * (tipPercent / 100);
  let total = (billAmount + tip).toFixed(2);

  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total}`);
}

let bill = Number(rlSync.question("What is the bill?\n"));
let tipPercentage = Number(rlSync.question("What is the tip percentage?\n"));

tipCalculator(bill, tipPercentage);
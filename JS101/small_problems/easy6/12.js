console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

function isBalanced (str) {
  let openingParen = 0;
  let closingParen = 0;
  let parenString = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] === "(") {
      openingParen += 1;
      parenString += str[index];
    } else if (str[index] === ")") {
      closingParen += 1;
      parenString += str[index];
    }
  }
  if (parenString.length === 0) {
    return true;
  } else if ((parenString.startsWith("(")) &&
            (parenString.endsWith(")")) &&
            (closingParen === openingParen)) {
    return true;
  } else {
    return false;
  }
}
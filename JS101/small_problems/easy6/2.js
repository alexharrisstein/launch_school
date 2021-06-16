console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function doubleConsonants (str) {
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    if (!('aeiouAEIOU'.includes(str[index])) && ('a' < str[index].toLowerCase() &&
          str[index].toLowerCase() <= 'z')) {
      newStr += str[index].repeat(2);
    } else {
      newStr += str[index];
    }
  }
  return newStr;
}
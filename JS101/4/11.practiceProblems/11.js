let statement = "The Flintstones Rock";
let result = {};
let charsInStatement = statement.split('').filter(char => char !== " ");

charsInStatement.forEach(function(char) {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

console.log(result);
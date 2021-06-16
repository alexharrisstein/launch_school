let statement = "The Flintstones Rock";
let statementArray = statement.split('').filter(char => char !== ' ');
let result = {};

statementArray.forEach(function(char) {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});
console.log(result);
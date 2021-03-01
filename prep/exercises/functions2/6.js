console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

function removeLastChar (string) {
  string = string.slice(0, -1);
  return string;
}
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

function isBlank(string) {
  if(string.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}
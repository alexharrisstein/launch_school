let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(array, multiplier) {
  let multiplied = [];

  for (let index = 0; index < array.length; index++) {
    multiplied.push(multiplier * array[index]);
  }
  return multiplied;
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

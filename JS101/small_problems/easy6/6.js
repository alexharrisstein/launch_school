console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

function sequence (num) {
  let array = [];
  for (let index = 1; index <= num; index++) {
    array.push(index);
  }
  return array;
}
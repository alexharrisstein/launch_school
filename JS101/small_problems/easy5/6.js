console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplicativeAverage(arr) {
  let product = arr.reduce((accumulator, element) => accumulator * element, 1);
  let divide = product / arr.length;
  let result = String(divide.toFixed(3));
  return result;
}
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(array) {
  let sumOfSquares = array.reduce((accumulator, element) => {
    return  accumulator + element * element;
  }, 0)
  return sumOfSquares;
}
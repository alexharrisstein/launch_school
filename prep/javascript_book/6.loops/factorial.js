
function factorial(number) {
  let product = 1;
  for(let n = number; n > 0; n--) {
    product = n * product;
  }
  return product;
}

console.log(factorial(5));
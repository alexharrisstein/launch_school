console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

function multisum (num) {
  let numArray = [];
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      numArray.push(index);
    }
  }
  let sum = numArray.reduce((accum, element) => accum + element, 0);
  return sum;
}
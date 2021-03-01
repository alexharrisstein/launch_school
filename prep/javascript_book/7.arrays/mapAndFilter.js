let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  let newArray = arr.map(function(value) {
    return value.length;
  })
  let oddLengths = newArray.filter(function (val) {
    return (val % 2 !== 0);
  })
  return oddLengths; 
}
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunch (str) {
  let newArr = [];
  let arr = str.split('');
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[index - 1]) {
      newArr.push(arr[index]);
    }
  }
  return newArr.join('');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap (str) {
  let arr = str.split(' ');
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    let word = arr[index];
    if (word.length === 1) {
      newArr.push(word);
    } else {
      newArr.push(word[word.length - 1] + word.slice(1, word.length - 1) + word[0]);
    }
  }
  return newArr.join(' ');
}
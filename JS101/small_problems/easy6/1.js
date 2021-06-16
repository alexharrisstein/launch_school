console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

function repeater (str) {
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    newStr += str[index].repeat(2);
  }
  return newStr;
}
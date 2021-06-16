console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

function digitList(int) {
  let stringArray = (String(int).split(''));
  let newArray = [];
  for (let index = 0; index < stringArray.length; index++) {
    newArray.push(Number(stringArray[index]));
  }
  return newArray;
}
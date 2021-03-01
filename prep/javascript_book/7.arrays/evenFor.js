let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let bestArray = [];
for(let i = 0; i < myArray.length; i++) {
  if( myArray[i] % 2 === 0) {
    bestArray.push("even");
  } else {
    bestArray.push("odd");
  }
}
console.log(bestArray);
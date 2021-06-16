let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
let newArray = [];
for(let i = 0; i < myArray.length; i++) {
  for(let j = 0; j < myArray[i].length; j++) {
    if (myArray[i][j] % 2 === 0) {
      newArray.push(myArray[i][j]);
    }
  }
}
  console.log(newArray);   

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

function multiplyList(arr1, arr2) {
  let newArray = [];
  for (let index = 0; index < arr1.length; index++) {
    newArray.push(arr1[index] * arr2[index]);
  }
  return newArray;
}
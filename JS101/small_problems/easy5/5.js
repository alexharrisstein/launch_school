console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

function interleave (arr1, arr2) {
  let newArr = [];
  for (let index = 0; index < arr1.length; index++) {
    newArr.push(arr1[index], arr2[index]);
  }
  return newArr;
}
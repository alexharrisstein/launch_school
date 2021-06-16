console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union (arr1, arr2) {
  let newArr = arr1;
  arr2.forEach(function (element) {
    if (!(arr1.includes(element))) {
      newArr.push(element);
    }
  });
  return newArr;
}
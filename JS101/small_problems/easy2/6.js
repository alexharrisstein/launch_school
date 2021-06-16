console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

function centerOf (str) {
  let midpoint = str.length / 2;
  if (str.length % 2 === 0) {
    return str.slice(midpoint - 1, midpoint + 1);
  } else {
    return str[Math.floor(midpoint)];
  }
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

function stringy (num) {
  let stringer = '';
  for (let index = 0; index < Number(num); index++) {
    if (index % 2 === 0) {
      stringer += '1';
    } else {
      stringer += '0';
    }
  }
  return stringer;
}
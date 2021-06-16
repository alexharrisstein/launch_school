console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

function xor(input1, input2) {
  if ((input1 == true) && (input2 == false)) {
    return true;
  } else if (input1 == false && input2 == true) {
    return true;
  } else {
    return false;
  }
}
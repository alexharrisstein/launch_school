triangle(5);

triangle(9);

function triangle (num) {
  let numSpaces = num;
  let triangle = '';

  for (let numStars = 0; numStars <= num; numStars++) {
    triangle += (' '.repeat(numSpaces) + '*'.repeat(numStars) + '\n');
    numSpaces -= 1;
  }
  console.log(triangle);
}
/*Log all odd numbers from 1 to 99, inclusive,
to the console, with each number on a separate line.*/

for (let index = 1; index < 100; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}
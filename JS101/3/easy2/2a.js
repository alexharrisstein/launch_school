let numbers = [1, 2, 3, 4, 5];
let numbersReversed1 = numbers.slice().reverse();
console.log(numbersReversed1); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let numbersReversed2 = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbersReversed2); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let numbersReversed3 = [];

numbers.forEach(function(number) {
  numbersReversed3.unshift(number);
});
console.log(numbersReversed3);
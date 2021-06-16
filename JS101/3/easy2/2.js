let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbersCopy = numbers.slice();
numbersCopy.reverse();
console.log(numbersCopy);

let numbersCopy2 = [...numbers];
numbersCopy2.sort((num1, num2) => num2 - num1);
console.log(numbersCopy2);
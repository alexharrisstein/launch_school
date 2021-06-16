let fruits = ['apple', 'banana', 'pear'];
let transformedElements = [];
let counter = 0;

while(counter < fruits.length) {
  let currentValue = fruits[counter];

  transformedElements.push(currentValue + 's');
  counter += 1;
}
console.log(transformedElements);
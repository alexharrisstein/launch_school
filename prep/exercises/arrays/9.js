let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

function contains (element, array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === element) {
      return true;
    }
  }
  return false;
}
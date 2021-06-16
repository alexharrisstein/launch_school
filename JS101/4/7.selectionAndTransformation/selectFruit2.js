let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit (obj) {
  let selectedFruit = {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (produce[keys[i]] === "Fruit") {
      selectedFruit[keys[i]] = produce[keys[i]];
    }

  }
  return selectedFruit;
}
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
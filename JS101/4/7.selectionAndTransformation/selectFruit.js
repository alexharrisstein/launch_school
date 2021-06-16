let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }


function selectFruit(object) {
  let selectedFruit = {};
  let keys = Object.keys(object);

  for (let counter = 0; counter < keys.length; counter++) {
    let currentKey = keys[counter];
    let currentValue = object[currentKey];

    if (currentValue === "Fruit") {
      selectedFruit[currentKey] = currentValue;
    }
  }
  console.log(selectedFruit);
}
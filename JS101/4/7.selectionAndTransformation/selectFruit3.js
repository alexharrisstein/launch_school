let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
function selectFruit(obj) {
  let produceList = Object.keys(obj);
  let selectedFruit = {};

  for (let index = 0; index < produceList.length; index++) {
    let currentKey = produceList[index];
    let currentValue = produce[currentKey];

    if (currentValue === "Fruit") {
      selectedFruit[currentKey] = currentValue;
    }
  }
  return selectedFruit;

}
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
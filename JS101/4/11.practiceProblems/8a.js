let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObject = {};

for (let index = 0; index < flintstones.length; index++) {
  let currentElement = flintstones[index];
  flintstonesObject[currentElement] = index;
}
console.log(flintstonesObject);
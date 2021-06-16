let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((value, i) => {
  flintstonesObj[value] = i;
})

console.log(flintstonesObj);
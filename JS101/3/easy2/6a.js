let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let newFlintstones = [].concat(...flintstones);

console.log(newFlintstones);
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let flintstonesArray = Object.entries(flintstones);
flintstonesArray.filter(element => element[0] === "Barney").shift();

console.log(flintstonesArray);
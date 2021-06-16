let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let newFlintstones = {};

Object.keys(flintstones).forEach(function(key) {
  if (key === "Barney") {
    newFlintstones["Barney"] = flintstones["Barney"];
  }
});
console.log(newFlintstones);
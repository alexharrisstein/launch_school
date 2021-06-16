let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let tArray1 = statement1.split('').filter(char => char === "t");
console.log(tArray1.length);

let tArray2 = statement2.split('').filter(char => char === "t");
console.log(tArray2.length);
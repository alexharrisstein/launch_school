let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let numberTs1 = statement1.split('').filter(char => char === 't').length;
let numberTs2 = statement2.split('').filter(char => char === 't').length;
console.log(numberTs1);
console.log(numberTs2);
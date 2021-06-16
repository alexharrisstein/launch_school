let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let vowels = "aeiouAEIOU";

let vowelsInStatement1 = statement1.split('').filter(char => vowels.includes(char)).length;
let vowelsInStatement2 = statement2.split('').filter(char => vowels.includes(char)).length;

console.log(vowelsInStatement1);
console.log(vowelsInStatement2);
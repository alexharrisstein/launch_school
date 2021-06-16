function age( ) {
let rlSync = require('readline-sync');
let age = Number(rlSync.question("What is your age?"));
return (`Your age is ${age}.\nIn 10 years, you will be ${age + 10} years old.\nIn 20 years, you will be ${age + 20} years old.\nIn 30 years, you will be ${age + 30} years old.\nIn 40 years, you will be ${age + 40} years old.`);
}
console.log(age());
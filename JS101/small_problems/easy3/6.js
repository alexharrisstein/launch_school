let readline = require('readline-sync');
let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!\n
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\n
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
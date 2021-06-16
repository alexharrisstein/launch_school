let famousWords = "seven years ago...";
let completeFamousWords1 = "Four score and " + famousWords;
console.log(completeFamousWords1);

let completeFamousWords2 = "Four score and ".concat(famousWords);
console.log(completeFamousWords2);

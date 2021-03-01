let finalString = "";

function repeat (num, string) {
  for(let i = 0; i < num; i ++) {
    finalString += string;
  }
  return finalString;
}

console.log(repeat(3, 'ha')); // 'hahaha'
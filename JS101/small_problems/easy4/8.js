console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes (str) {
  let obj = {};
  let words = str.split(' ');
  words.forEach(function (word) {
    let wordSize = String(word.length);
    if (Object.keys(obj).includes(wordSize)) {
      obj[wordSize] += 1;
    } else {
      obj[word.length] = 1;
    }
  });
  return obj;
}
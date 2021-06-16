function selectVowels(str) {
  let extractedVowels = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if ("AEIOUaeiou".includes(currentChar)) {
      extractedVowels += currentChar;
    }
  }
  return extractedVowels;
}
console.log(selectVowels("Alexander Stein"));

let numberOfVowels = selectVowels("Alexander Stein").length;
console.log(numberOfVowels);
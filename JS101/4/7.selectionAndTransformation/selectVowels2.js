function selectVowels (str) {
  let selectedVowels = "";
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      selectedVowels += str[i];
    }
  }
  return selectedVowels;
}
console.log(selectVowels("Alexander Harris Stein").length);
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

function reverseWords (str) {
  let array = str.split(' ');
  let reversedArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index].length < 5) {
      reversedArray.push(array[index]);
    } else {
      reversedArray.push(array[index].split('').reverse().join(''));
    }
  }
  return reversedArray.join(' ');
}
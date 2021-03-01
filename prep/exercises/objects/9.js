let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let newObject = {};
for(let i = 0; i < nestedArray.length; i++) {
  newObject[nestedArray[i][0]] = nestedArray[i][1]
}
console.log(newObject);
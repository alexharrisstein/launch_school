let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2*/

function countOccurrences(arr) {
  let obj = {};
  for (let index = 0; index < arr.length; index++) {
    if (Object.keys(obj).includes(arr[index])) {
      obj[arr[index]] += 1;
    } else {
      obj[arr[index]] = 1;
    }
  }
  let entries = Object.entries(obj);
  for (let index = 0; index < entries.length; index++) {
    console.log(`${entries[index][0]} => ${entries[index][1]}`);
  }
}
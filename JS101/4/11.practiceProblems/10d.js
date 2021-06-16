let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages);
let minAge = agesArray[0];

agesArray.forEach(function(age) {
  if (age < minAge) {
    minAge = age;
  }
});

console.log(minAge);
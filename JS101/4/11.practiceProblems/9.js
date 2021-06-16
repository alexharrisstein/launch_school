let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let agesArray = Object.values(ages);
let agesSum = 0;

agesArray.forEach((age) => {
  agesSum += age;
});
console.log(agesSum);
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let agesList = Object.values(ages);
let youngestAge = agesList[0];

Object.values(ages).forEach ((currentAge) => {
  if (currentAge < youngestAge) {
    youngestAge = currentAge;
  }
});

console.log(youngestAge);
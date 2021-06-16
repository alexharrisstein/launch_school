let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.indexOf("house"));
// Expected return value:
// => 'Few things in life are as important as '
advice.slice(0, advice.indexOf('house'));
// => 'Few things in life are as important as '
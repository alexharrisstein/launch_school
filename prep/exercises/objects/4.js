let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function greet(person) {
    console.log(`Hej,${person}!`);
  }, 
};

jane.greet('Bobby'); // Hej, Bobby!
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let newDescription = munstersDescription[0].toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
console.log(newDescription);
console.log(munstersDescription.slice(1));
/*munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();*/
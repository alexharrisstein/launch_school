greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

function greet (languageCode) {
  switch (languageCode) {
    case "en":
      console.log("Hi!");
      break;
    case "fr":
      console.log("Salut!");
      break;
    case "pt":
      console.log("Olá!");
      break;
    case "de":
      console.log("Hallo!");
      break;
    case "sv":
      console.log("Hej!");
      break;
    case "af":
      console.log("Haai!");
      break;
    default:
      console.log("Nilbog!");
  }
}
console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

function localGreet(locale) {
  let language = locale.split("_")[0];
  let country = locale.slice(3,5);
  if(language === "fr") {
    return "Salut!";
  } else if(language === "en") {
    switch(country) {
      case "GB": return "Hello!";
      case "US": return "Hey!";
      case "AU": return "Howdy!";
      default: return "Hello!"
    }
  }

}
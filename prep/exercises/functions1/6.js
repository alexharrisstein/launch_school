console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

function compareByLength (first, second) {
  if(first.length < second.length) {
    return -1;
  } else if (first.length > second.length) {
      return 1;
  } else {
    return 0;
  }
}



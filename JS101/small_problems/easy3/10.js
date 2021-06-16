console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

function century (year) {
  let rawCentury = Math.ceil(year / 100);
  if (rawCentury.toString().endsWith('1') && !(rawCentury.toString().endsWith('11'))) {
    return rawCentury + 'st';
  } else if (rawCentury.toString().endsWith('2') && !(rawCentury.toString().endsWith('12'))) {
    return rawCentury + 'nd';
  } else if (rawCentury.toString().endsWith('3') && !(rawCentury.toString().endsWith('13'))) {
    return rawCentury + 'rd';
  } else {
    return rawCentury +  'th';
  }
}
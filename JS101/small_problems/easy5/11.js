/*console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");*/

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

function rawHours (num) {
  let rawHours;

  if (Math.abs(num) >= 1440) {
    rawHours = (num / 60) % 24;
  } else {
    rawHours = num / 60;
  }
  return rawHours;
}

function hours (num) {
  let hours;
  if (rawHours(num) < 0) {
    hours = 24 + Math.floor(rawHours(num));
  } else {
    hours = Math.floor(rawHours(num));
  }
  return String(hours);
}

function minutes (num) {
  let rawMinutes = 60 * (rawHours(num) - Math.floor(rawHours(num)));
  let minutes;
  if (rawMinutes < 0) {
    minutes = rawMinutes + 60;
  } else {
    minutes = Math.round(rawMinutes);
  }
  return String(minutes);
}

function timeOfDay (num) {
  return (`${hours(num).padStart(2, '0')}:${minutes(num).padStart(2, '0')}`);
}
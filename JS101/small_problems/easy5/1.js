console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

function dms (num) {
  return `${degrees(num)}°${minutes(num)}'${seconds(num)}"`;
}

function degrees (num) {
  let degrees = Math.floor(num);
  return degrees;
}

function afterDecimal (num) {
  let str = String(num);
  if (!(str.includes('.'))) {
    return 0;
  } else {
    return parseFloat(str.slice(str.indexOf('.')));
  }
}

function minutes (num) {
  let minutes = Math.floor(afterDecimal(num) * 60) * .01;
  let minutesString = String(minutes.toFixed(2));
  return minutesString.slice(minutesString.indexOf('.') + 1);
}

function seconds (num) {
  let rawMinutes = afterDecimal(num) * 60;
  let rawMinutesString = String(rawMinutes.toFixed(2));
  let secondsString = rawMinutesString.slice(rawMinutesString.indexOf('.'));
  let seconds = String((Math.round(parseFloat(secondsString) * 60) * .01).toFixed(2));
  return seconds.slice(seconds.indexOf('.') + 1);
}
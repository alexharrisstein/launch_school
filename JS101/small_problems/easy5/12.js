/*console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);*/

console.log(afterMidnight("00:00"));
console.log(beforeMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(beforeMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));

function afterMidnight (time) {
  let minutes = (Number(time.slice(0,2)) * 60) + Number(time.slice(3));
  if (minutes === 1440) {
    return 0;
  } else {
    return minutes;
  }
}

function beforeMidnight (time) {
  let minutes = 1440 - afterMidnight(time);
  if (minutes === 1440) {
    return 0;
  } else {
    return minutes;
  }
}

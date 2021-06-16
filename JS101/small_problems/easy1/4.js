/*Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).*/
function area (len, wid) {
  let area = (len * wid).toFixed(2);
  return `The area of the room is ${area} square meters (${(area * 10.7639).toFixed(2)} square feet).`;
}
let rlSync = require("readline-sync");
let length = rlSync.question("Enter the length of the room in meters:\n");
let width = rlSync.question("Enter the width of the room in meters:\n");

console.log(area(length, width));
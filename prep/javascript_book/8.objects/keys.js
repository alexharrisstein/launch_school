let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
let upper = keys.map(function (value) {
  return value.toUpperCase();
});
console.log(upper);
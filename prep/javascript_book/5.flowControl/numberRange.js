function numberRange(i) {
  if(i < 0) {
    console.log(i + " is less than 0");
  } else if (i <= 50) {
      console.log(i + " is between 0 and 50");
  } else if (i <= 100) {
      console.log(i + " is between 51 and 100");
  } else {
    console.log(i + " is greater than 100");
  }
}
numberRange(-25);
numberRange(52);
numberRange(37);
numberRange(200);
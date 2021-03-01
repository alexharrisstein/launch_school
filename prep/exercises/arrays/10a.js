let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
let finalCode = "";

for(let i = 0; i < passcode.length; i++) {
  if( i === 0) {
    finalCode = passcode[i];
  } else {
  finalCode = finalCode + "-" + passcode[i];
  }
}

console.log(finalCode);
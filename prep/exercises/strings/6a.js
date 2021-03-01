let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
function includes (str, char ) {
  for(let i = 0; i < str.length; i ++) {
    if(str[i] === char) {
      return true;
    }
  }
  return false;
}

console.log(includes(byteSequence, "x"));
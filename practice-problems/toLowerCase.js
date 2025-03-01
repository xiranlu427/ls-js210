function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  lowerStr = ''

  for (index = 0; index < string.length; index += 1) {
    let asciiCode = string.charCodeAt(index);

    if (string[index] >= 'A' || string[index] <= 'Z') {
      lowerChar = String.fromCharCode(asciiCode);
    } 
    
    lowerStr += String.fromCharCode(charCode);
  }
  return lowerStr;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
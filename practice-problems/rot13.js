const ROTATION_OFFSET = 13;
const LETTER_COUNT = 26;
const FIRST_LOWER_LETTER_CODE = 'a'.charCodeAt();
const LAST_LOWER_LETTER_CODE = 'z'.charCodeAt();
const FIRST_UPPER_LETTER_CODE = 'A'.charCodeAt();
const LAST_UPPER_LETTER_CODE = 'Z'.charCodeAt();

function isLetter(char) {
  if ((char >= 'A' && char <= "Z") || (char >= 'a' && char <= 'z')) {
    return true;
  } else {
    return false;
  }
}

function shiftCharCode(code, firstLetterCode) {
  return (code + ROTATION_OFFSET - firstLetterCode) % LETTER_COUNT +
           firstLetterCode;
}

function getNewCharCode(code) {
  if (code <= LAST_UPPER_LETTER_CODE) {
    code = shiftCharCode(code, FIRST_UPPER_LETTER_CODE);
  } else {
    code = shiftCharCode(code, FIRST_LOWER_LETTER_CODE);
  }

  return code;
}

function rot13(str) {
  let newStr = '';
  for (let index = 0; index < str.length; index += 1) {
    let charCode = str.charCodeAt(index);
    if (isLetter(str[index])) {
      charCode = getNewCharCode(charCode);
      let newChar = String.fromCharCode(charCode);
      newStr += newChar;
    } else {
      newStr += str[index];
    }
  }
  
  return newStr;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
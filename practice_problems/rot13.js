const LETTER_COUNT = 26;
const FIRST_LOWER_LETTER_CODE = 'a'.charCodeAt();
const LAST_LOWER_LETTER_CODE = 'z'.charCodeAt();
const FIRST_UPPER_LETTER_CODE = 'A'.charCodeAt();
const LAST_UPPER_LETTER_CODE = 'Z'.charCodeAt();

function isLetter(char) {
  return /[a-z]/i.test(char);
}

function shiftCharCode(code, firstLetterCode) {
  const ROTATION_OFFSET = 13;
  return (code + ROTATION_OFFSET - firstLetterCode) % LETTER_COUNT +
           firstLetterCode;
}

function getNewCharCode(code) {
  let firstCode;
  if (code <= LAST_UPPER_LETTER_CODE) {
    firstCode = FIRST_UPPER_LETTER_CODE;
  } else {
    firstCode = FIRST_LOWER_LETTER_CODE;
  }
  code = shiftCharCode(code, firstCode);
  return code;
}

function rot13(str) {
  let newStr = '';
  for (let index = 0; index < str.length; index += 1) {
    let char = str[index];
    if (isLetter(char)) {
      let charCode = char.charCodeAt(0);
      charCode = getNewCharCode(charCode);
      char = String.fromCharCode(charCode);
    }

    newStr += char;
  }
  
  return newStr;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
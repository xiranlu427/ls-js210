function isLetter(char) {
  return /[a-z]/i.test(char);
}

function cleanUp(str) {
  let newStr = '';
  for (let index = 0; index < str.length; index += 1) {
    if (isLetter(str[index])) {
      newStr += str[index];
    } else if (index === 0 || newStr.slice(-1) !== ' ') {
      newStr += ' ';
    }
  }
  
  return newStr;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
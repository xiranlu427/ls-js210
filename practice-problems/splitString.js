function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('Error: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (let i = 0; i < string.length; i += 1) {
      console.log(string[i]);
    }
    return;
  }

  let tempStr = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === delimiter) {
      console.log(tempStr);
      tempStr = '';
    } else {
      tempStr += string[i];
    }
  }

  if (tempStr) {
    console.log(tempStr);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
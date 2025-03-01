function substr(string, start, length) {
  start = (start < 0) ? string.length + start : start;
  length = (start + length > string.length) ? string.length - start : length;

  let substr = '';
  for (let index = start; index < start + length; index += 1) {
    substr += string[index];
  }

  return substr;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 8, 20);     // "rld"
substr(string, 0, 0);      // ""
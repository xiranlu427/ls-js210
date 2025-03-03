function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }
  
  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let substr = '';
  for (let index = start; index < end; index += 1) {
    substr += string[index];
  }

  return substr;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
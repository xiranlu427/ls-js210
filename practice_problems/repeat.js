const isValidCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isValidCount(times)) {
    return undefined;
  } 
  
  let result = '';
  for (let time = 0; time < times; time += 1) {
    result += string;
  }

  return result;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
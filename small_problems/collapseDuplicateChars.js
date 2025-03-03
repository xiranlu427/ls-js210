function crunch(str) {
  let crunched = '';
  let previous = undefined;
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== previous) {
      previous = str[index];
      crunched += str[index];
    }
  }

  return crunched;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
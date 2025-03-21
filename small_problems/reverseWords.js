function reverseWords(str) {
  const words = str.split(' ');

  return words.map(reverseWord).join(' ');
}

function reverseWord(word) {
  if (word.length >= 5) {
    return word.split('').reverse().join('');
  } else {
    return word;
  }
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
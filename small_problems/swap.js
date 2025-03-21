// basic solution
function swap2(str) {
  const words = str.split(' ');
  for (let outerIndex = 0; outerIndex < words.length; outerIndex += 1) {
    let word = words[outerIndex];
    if (word.length === 1) {
      continue;
    }
    let newWord = word[word.length - 1];
    // can use slice() to get chars in between
    for (let innerIndex = 1; innerIndex < word.length - 1; innerIndex += 1) {
      newWord += word[innerIndex];
    }

    newWord += word[0];
    words[outerIndex] = newWord;
  }
  return words.join(' ');
}

// using map

function swapFirstLastChars(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

function swap(str) {
  const words = str.split(' ');
  const newWords = words.map((word) => swapFirstLastChars(word));
  return newWords.join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
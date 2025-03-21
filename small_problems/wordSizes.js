// basic version
function wordSizes2(str) {
  const letterCounter = {};
  const words = str.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let len = words[index].length;
    if (len === 0) {
      continue;
    }
    // const lengths = Object.keys(letterCounter);
    // if (lengths.includes(len)) {
    if (letterCounter[len]) {
      letterCounter[len] += 1;
    } else {
      letterCounter[len] = 1;
    }
  }

  return letterCounter;
}

wordSizes2('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes2('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes2("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes2('');                                            // {}

// upgraded version - disregarding non-letters
function isLetter(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}

function wordSizes(str) {
  const words = str.split(' ');
  const counter = {};

  for (let index = 0; index < words.length; index += 1) {
    let chars = words[index].split('');
    chars = chars.filter((char) => isLetter(char));
    let len = chars.length;

    if (len === 0) {
      continue;
    }

    counter[len] = counter[len] || 0;
    counter[len] += 1;
  }

  return counter;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
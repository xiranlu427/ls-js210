function wordCount(str) {
  let words = str.split(' ');
  let count = {};

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];
    if (!count[word]) {
      count[word] = 1;
    } else {
      count[word] += 1;
    }
  }

  return count;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
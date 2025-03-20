function repeatedCharacters(str) {
  let count = {};
  let strLower = str.toLowerCase();

  for (let index = 0; index < strLower.length; index += 1) {
    if (count[strLower[index]]) {
      count[strLower[index]] += 1;
    } else {
      count[strLower[index]] = 1;
    }
  }

  let repeated = {};
  for (let key in count) {
    if (count[key] > 1) {
      repeated[key] = count[key];
    }
  }

  return repeated;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
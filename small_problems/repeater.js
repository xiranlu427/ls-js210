function repeater(str) {
  let repeated = '';
  for (let i = 0; i < str.length; i += 1) {
    repeated += str[i];
    repeated += str[i];
  }

  return repeated;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
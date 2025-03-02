function indexOf(firstString, secondString) {
  for (let i = 0; i <= firstString.length - secondString.length; i++) {
    let match = true;
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i + j] !== secondString[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let lastMatch = -1;
  for (let i = 0; i <= firstString.length - secondString.length; i++) {
    let match = true;
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i + j] !== secondString[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      lastMatch = i;
    }
  }

  return lastMatch;
}


indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
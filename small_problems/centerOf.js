function centerOf(str) {
  if (str.length % 2 === 0) {
    return str.substring(str.length / 2 - 1, str.length / 2 + 1);
  } else {
    return str[Math.floor(str.length / 2)];
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
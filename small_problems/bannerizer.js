function logInBox(str) {
  let length = str.length;
  let topBottom = `+-${'-'.repeat(length)}-+`;
  let middle = `| ${' '.repeat(length)} |\n`;
  let middleText = `| ${str} |\n`;
  console.log(topBottom + '\n' + middle + middleText + middle + topBottom);
}

console.log(logInBox('To boldly go where no one has gone before.'));
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

console.log(logInBox(''));
// +--+
// |  |
// |  |
// |  |
// +--+

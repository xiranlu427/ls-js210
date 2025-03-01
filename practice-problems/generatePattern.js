// Version 1: for nStars between 1 and 10 (exclusive)

function generatePattern(nStars) {
  for (let row = 1; row <= nStars; row += 1) {
    let rowStr = '';
    for (let col = 1; col <= nStars; col += 1) {
      if (col > row) {
        rowStr += '*';
      } else {
        rowStr += String(col);
      }
    }
    console.log(rowStr);
  } 
}

// LS Solution:
function generatePattern2(nStars) {
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    for (let count = lineNumber + 1; count <= nStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}

// Version 2: for nStars equal to or greater than 10
function generatePattern3(nStars) {
  // calculate the length of the last row of numbers
  let lastRowString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }
    
    let numOfStars = width - string.length;
    for (let count = 1; count <= numOfStars; count += 1) {
      string += '*';
    }
    console.log(string); 
  }
}

generatePattern(7);
generatePattern3(20);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
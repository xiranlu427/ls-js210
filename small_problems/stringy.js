function stringy(length) {
  if (length % 2 === 0) {
    return '10'.repeat(length / 2);
  } else {
    return '10'.repeat((length + 1) / 2).slice(0, length);
  }
}

function stringy2(num) {
  return '10'.repeat(parseInt(num / 2)) + '1'.repeat(num % 2);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
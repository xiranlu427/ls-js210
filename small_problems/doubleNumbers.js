function isDouble(num) {
  const digits = String(num);
  
  if (digits.length % 2 !== 0) {
    return false;
  }
  
  const midIndex = digits.length / 2;
  const left = digits.substring(0, midIndex);
  const right = digits.substring(midIndex);

  return left === right;
}

function twice(num) {
  if (isDouble(num)) {
    return num;
  } else {
    return num * 2;
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
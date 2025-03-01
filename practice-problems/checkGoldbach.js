function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let number = 2; number <= Math.sqrt(num); number += 1) {
      if (num % number === 0) {
        return false;
      }
    }
    return true;
  }
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log('null');
  } else {
    for (let num = 2; num <= expectedSum - num; num += 1) {
      if (isPrime(num) && isPrime(expectedSum - num)) {
        console.log(`${num} ${expectedSum - num}`);
      }
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
function century(year) {
  let centuryNum = Math.floor(year / 100);
  if (year % 100 !== 0) {
    centuryNum += 1;
  }

  let suffix = 'th';
  let lastTwoDigits = centuryNum % 100;
  let lastDigit = centuryNum % 10;

  if (lastTwoDigits < 11 || lastTwoDigits > 13) {
    switch (lastDigit) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }

  return String(centuryNum) + suffix;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
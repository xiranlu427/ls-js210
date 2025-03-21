/* eslint-disable no-mixed-operators */
const DEGREE = '\u00B0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const DEGREES = 360;

// input is a positive float within range 0 to 360
function dms(degreesFloat) {
  const degrees = Math.floor(degreesFloat);
  const mins = Math.floor((degreesFloat - degrees) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(((degreesFloat - degrees) * MINUTES_PER_DEGREE
   - mins) * SECONDS_PER_MINUTE);

  return `${degrees}${DEGREE}${padZero(mins)}'${padZero(seconds)}"`;
}

function padZero(num) {
  const numStr = String(num);
  if (numStr.length === 1) {
    return '0' + numStr;
  } else {
    return numStr;
  }
}

// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");

// input is any positive or negative float
function dms2(degreesFloat) {
  degreesFloat %= DEGREES;
  if (degreesFloat < 0) {
    degreesFloat = 360 + degreesFloat;
    return dms(degreesFloat);
  }

  return dms(degreesFloat);
}

dms2(-1);   // 359°00'00"
dms2(400);  // 40°00'00"
dms2(-40);  // 320°00'00"
dms2(-420); // 300°00'00"
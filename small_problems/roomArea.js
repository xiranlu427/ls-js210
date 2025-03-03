let rlSync = require('readline-sync');

const SQMETERS_T0_SQFEET = 10.7639;

let length = rlSync.prompt("Enter the length of the room in meters:");
length = parseInt(length, 10);

let width = rlSync.prompt("Enter the width of the room in meters:");
width = parseInt(width, 10);

let areaInMeters = length * width;
let areaInFeet = areaInMeters * SQMETERS_T0_SQFEET;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters \
(${areaInFeet.toFixed(2)} square feet).`)
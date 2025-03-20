let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 
  'Oct', 'Nov', 'Dec'];

function formattedMonth(date) {
  return months[date.getMonth()];
}

function formattedDay(date) {
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + 
    dateSuffix(date.getDate()));
}

function dateSuffix(day) {
  let suffix = 'th';

  if (day < 11 || day > 13) {
    switch (day % 10) {
      case 1:
        suffix = 'st';
      case 2:
        suffix = 'nd';
      case 3:
        suffix = 'rd';
      default:
        suffix = 'th';
    }
  }

  return String(day) + suffix;
}

formattedDate(today);

today.getFullYear();
today.getTime();

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
console.log(nextWeek);
console.log(today);
console.log(today === nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(nextWeek.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());


function padZero(value) {
  let timeComponent = String(value);
  if (timeComponent.length < 2) {
    return '0' + timeComponent;
  } else {
    return timeComponent;
  }
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return padZero(hours) + ':' + padZero(minutes);
}

console.log(formatTime(today));
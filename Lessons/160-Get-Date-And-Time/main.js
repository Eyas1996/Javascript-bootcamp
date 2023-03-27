/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birth = new Date("jul 06, 96");
let dateDiff = dateNow - birth;

console.log(birth);
console.log(dateDiff);
console.log(dateDiff / 1000); // Number Of Seconds
console.log(dateDiff / 1000 / 60); // Number Of Minutes
console.log(dateDiff / 1000 / 60 / 60); // Number Of Hours
console.log(dateDiff / 1000 / 60 / 60 / 24); // Number Of Days
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); // Number Of Years

// Get Methods
console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth()); // the index of the month
console.log(dateNow.getDay()); // Sun is day 0
console.log(dateNow.getHours()); // the current hour
console.log(dateNow.getMinutes()); // the current Minute
console.log(dateNow.getSeconds()); // the current Second

/*
  Constructor Function
*/

// --------------------------------------
function Phone(serial) {
  // this is The Created Object From The constructor Function
  console.log(this);
  this.serial = `#${serial}`;
  // this => the Ojectes(Phone1, ....)
  // this.serial => create property (serial)
  // this.serial = serial =>  to give the key Serial a vlaue as an Argument.
}

// with new Keyword create an instance Object of Constructor Function

let phone1 = new Phone(123456);
let phone2 = new Phone(567891);
let phone3 = Phone(889988);

console.log(phone1.serial);
console.log(phone2.serial);
console.log(window.serial);

console.log(phone1 instanceof Phone);
console.log(phone2 instanceof Phone);
console.log(phone3 instanceof Phone);

console.log(phone1.constructor === Phone);
console.log(phone2.constructor === Phone);
// console.log(phone3.constructor === Phone); // undefined
// --------------------------------------
function sayHelloTo(someone) {
  // someone => Parameter
  return `Hello ${someone}`;
}
console.log(sayHelloTo("Osama")); // Osama => Argument

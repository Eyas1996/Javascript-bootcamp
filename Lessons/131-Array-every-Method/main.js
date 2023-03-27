/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/
const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

// To get the Keys of the Object an change it into an Array
let locationsArray = Object.keys(locations);

console.log(locationsArray); // ['10', '20', '30', '40']

// To change the strings of an Array into numbers
let locationsArrayNumbers = locationsArray.map((n) => {
  return +n;
});

console.log(locationsArrayNumbers); // [10, 20, 30, 40]

// With Some Method
let checkWithSome = locationsArrayNumbers.some(function (e) {
  return e >= this;
}, mainLocation);
console.log(checkWithSome); // true

// With Every Method
let checkWithEvery = locationsArrayNumbers.every(function (e) {
  return e >= this;
}, mainLocation);

console.log(checkWithEvery); // false

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let nums = [1, 2, 12];

let myNumber = 11;
// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

// let check = nums.some((e) => e > 5);

// -----------------------------------------------------------------------
// Check if Element Exists In Array
let check = nums.some(function (e) {
  console.log(this);
  return e > this;
}, myNumber);

console.log(check);

// -----------------------------------------------------------------------
// Check if Element Exists In Array
// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }
function checkValues(arr, val) {
  return arr.some((e) => e === val);
}

console.log(checkValues([1, 2, 3, 4, 5, 6, 7], 20));
console.log(checkValues(nums, 5));
console.log(checkValues(nums, myNumber));
// -----------------------------------------------------------------------
//  Check If Number In Range
let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log("check Number In Range => " + checkNumberInRange);

// Higher Order Functions
// ---> is a function that accepts functions as parameters and/or returns a function.

// - Map
// --- method creates a new array
// --- populated with the results of calling a provided function on every element
// --- in the calling array.

// Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
// - Element => The current element being processed in the array.
// - Index => The index of the current element being processed in the array.
// - Array => The Current Array

// Notes
// - Map Return A New Array

// Examples
// - Anonymous Function
// - Named Function

let myNums = [1, 2, 3, 4, 5, 6];
let myNewArr = [];
for (let i = 0; i < myNums.length; i++) {
  myNewArr.push(myNums[i] + myNums[i]);
}
console.log(myNums);
console.log(myNewArr);

// Same Idea With Map
let addSlef = myNums.map(function (element, index, array) {
  console.log(`Curent Element => ${element}`);
  console.log(`Curent Index => ${index}`);
  console.log(`Array => ${array}`);
  console.log(`This Element => ${this}`);
  return element + element;
}, 10);
console.log(addSlef);

// Same Idea With Anonymous Function
let addSlef2 = myNums.map((a) => a + a);
console.log(addSlef2);

// Same Idea With Named Function
function addition(element) {
  return element + element;
}
let add = myNums.map(addition);
console.log(add);

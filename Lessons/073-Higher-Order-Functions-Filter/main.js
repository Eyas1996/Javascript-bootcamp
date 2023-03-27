/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the procided function.

  Syntay filter(callBackFunction(Element, Index, Array) {}, thisArg)
  - Element => The Current Element being processed in the Array.
  - Index => The Index of the Current Element being processed in the Array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filterFriends = friends.filter(function (element) {
  return element.startsWith("A");
});
console.log(filterFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(evenNumbers);

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);
// console.log({ ..."Osama" }); // Object

// Concatenate Arrays
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2, 7, 8];
console.log(allArrays);

// Copy Array
let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

// allFriends.push("Sameh", "Mahmoud"); // (5) ['Osama', 'Ahmed', 'Sayed', 'Sameh', 'Mahmoud']

// allFriends.push(thisYearFriends); // (4) ['Osama', 'Ahmed', 'Sayed', Array(2)]

allFriends.push(...thisYearFriends); // (5) ['Osama', 'Ahmed', 'Sayed', 'Sameh', 'Mahmoud']

console.log(allFriends);

// Use With Math Object

let myNums = [10, 200, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Object => Merge Object

let objOne = {
  a: 1,
  b: 2,
};

let objTwo = {
  c: 1,
  d: 2,
};

console.log({ ...objOne, ...objTwo, e: 5 });

let mergeObj = { ...objOne, ...objTwo, e: 5 };
console.log(mergeObj);

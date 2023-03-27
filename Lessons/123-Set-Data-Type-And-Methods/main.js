/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];

// Add:
// let myUniqueData = new Set([1, 1, 1, 2, 3, "A"]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3).add("A");
let myUniqueData = new Set();
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(myData);
console.log(myUniqueData);
console.log(myUniqueData.size); // 4

console.log(myData[0]); // 1
console.log(myUniqueData[0]); // undefined

// has:
console.log(`Is Set Has A => ${myUniqueData.has("A")}`); // true
console.log(`Is Set Has A => ${myUniqueData.has("a")}`); // false
console.log(`Is Set Has A => ${myUniqueData.has("a".toUpperCase())}`); // true

// Delete:
myUniqueData.delete(2);
console.log(myUniqueData.delete(2)); // Boolean true or false
console.log(myUniqueData);
console.log(myUniqueData.size); // 3

// clear:
myUniqueData.clear();
console.log(myUniqueData);
console.log(myUniqueData.size); // 0

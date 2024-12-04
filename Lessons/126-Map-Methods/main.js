/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

// ***Set***
let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

// ***Has***
console.log("###############");
console.log(myMap.has(10)); // ture
console.log(myMap.has("Name")); // ture
console.log(myMap.has("name")); // false
console.log("###############");
console.log(myMap);
// console.log(typeof myMap);

// ***Get***
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log(myMap.size); // 3

// ***Delete***
console.log(myMap.delete("Name")); // ture  => means the he has successfully deleted ("Name");
console.log(myMap.delete("Names")); // false  => means the he has Not successfully deleted because ("Named") it not exist;

console.log(myMap.size); // 2

// ***Clear***
myMap.clear();
console.log(myMap.size); // 0

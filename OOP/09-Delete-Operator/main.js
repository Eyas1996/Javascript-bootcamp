/*
  Delete Operator
*/

const user = { name: "Osama" };

console.log(user);
console.log(user.name);

// delete user; // Delete Property Not Object
// delete user.name;
// delete user["name"];
console.log(delete user["name"]);

console.log(user);
console.log(user.name);

console.log("#".repeat(15));

const username = "Osama";
console.log(username);
console.log(delete username);
console.log(username);

console.log("#".repeat(15));

const freetedObj = Object.freeze({ age: 26 });
console.log(freetedObj);
console.log(freetedObj.age);

console.log(delete freetedObj.age);

console.log(freetedObj);
console.log(freetedObj.age);

console.log("#".repeat(15));

const eObj = {};
Object.defineProperty(eObj, "a", { value: 1, configurable: true });
console.log(eObj);
console.log(eObj.a);

console.log(delete eObj.a);

console.log(eObj);
console.log(eObj.a);

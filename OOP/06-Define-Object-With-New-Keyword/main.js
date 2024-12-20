/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
*/

let user = new Object();

user.firstName = "Osama";
user.lastName = "Elzero";
user["age"] = 37;

user.getFullName = function () {
  return `Full Name Is ${user.firstName} ${user.lastName}`;
};

console.log(user);
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
console.log(user.getFullName());

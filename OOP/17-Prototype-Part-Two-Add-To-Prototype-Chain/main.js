/*
  Prototype
*/

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Osama");
let user2 = new User("Ahmed");

console.log(User.prototype);
console.log(user1);

User.prototype.addTitle = function () {
  return `Mr. ${this.name}`;
};

console.log(Object.prototype);

Object.prototype.elzero = "Elzero Web School";

const myObject = { a: 1, b: 2 };
console.log(myObject.a);
console.log(myObject.b);
console.log(myObject.elzero);

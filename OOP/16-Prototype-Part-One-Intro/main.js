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

// function sayHello() {
//   return 1;
// }
// console.log(sayHello.prototype);

const arr = [1, 2, 3, 4, 5];
console.log(Array.prototype);
console.log(arr.reverse());

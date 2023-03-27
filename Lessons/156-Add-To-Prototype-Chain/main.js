/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);

// Add A New Chain
User.prototype.sayWelcome = () => `Welcome ${this.u}`;

// Extend
Object.prototype.love = "Elzero Web school";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};
let myStr = "Elzero";

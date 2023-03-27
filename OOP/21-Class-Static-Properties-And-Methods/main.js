/*
  Class
  Static Properties & Methods
*/

class User {
  // Static Properties
  static counter = 0;

  constructor(name, email, counter) {
    this.name = name;
    this.email = email;
    this.counter = counter;
    User.counter++;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }

  // Static Methods
  static countObjects = function () {
    return `${this.counter} Objects Created.`;
  };
}

let user1 = new User("Osama", "o@nn.sa", 2);
let user2 = new User("Ahmed", "o@nn.sa", 2);
let user3 = new User("Osama", "o@nn.sa", 2);
let user4 = new User("Osama", "o@nn.sa", 2);
let user5 = new User("Osama", "o@nn.sa", 2);
// let user2 = User("Ahmed", "a@nn.sa"); // TypeError: Class constructor User

console.log(typeof User); // Function
console.log(User === User.prototype.constructor); // True

console.log(User.countObjects());

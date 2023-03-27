/*
  Class
  - Inheritance
*/

// Parent Class
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello From Class`;
  }
}

// Derived Class
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Ali", 1);
let SupermanOne = new Superman(120, "Mo", 1, true);

console.log(userOne.u);
console.log(userOne.sayHello());
console.log("------------------");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());
console.log("------------------");
console.log(SupermanOne.i);
console.log(SupermanOne.u);
console.log(SupermanOne.p);
console.log(SupermanOne.sayHello());
console.log(SupermanOne.a);

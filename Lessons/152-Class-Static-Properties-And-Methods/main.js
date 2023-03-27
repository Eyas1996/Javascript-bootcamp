/*
  Class
  - Static Properties And Methods
*/

class User {
  // Static Properties
  static count = 0;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++;
  }
  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Count`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 6000);
// let userT = new User(103, "Hassan", 2000);
// let userB = new User(104, "Hassan", 7000);
// let userC = new User(105, "Hassan", 8000);
// let userF = new User(106, "Hassan", 9000);

console.log(userOne.u); // "Elzero"
console.log(userTwo.u); // "Hassan"
console.log(userOne.count); // undefined
console.log(User.count); // 0
// console.log(userOne.sayHello()) // Error
console.log(User.sayHello()); // Hello From Class
console.log(User.countMembers());

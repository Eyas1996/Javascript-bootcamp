/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e;
  constructor(id, userName, eSalary) {
    this.i = id;
    this.u = userName;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

class Test extends User {
  constructor(id, userName, eSalary, email) {
    super(id, userName, eSalary);
    this.m = email;
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");
let testOne = new Test(100, "Elzero", "5000 Gneh", "no@gmail.com");

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);
console.log("###############");

console.log(testOne.i);
console.log(testOne.u);
console.log(testOne.getSalary() * 0.3);
console.log(testOne.m);

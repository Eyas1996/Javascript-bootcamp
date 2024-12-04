/*
  Importants Notes And The End
  [1] Arrow Functions Do Not Have a Prototype Property.
  [2] You Can Use Objects Inside Constructor Freely
  [3] f = function () { } ==== f() { }
*/
class User {
  constructor(fName, lName, age, email) {
    this.name = {
      first: fName,
      last: lName,
    };
    this.age = age;
    this.email = email;
  }
  sayHello = function () {
    return `Say Hello`;
  };
  sayHi() {
    return `Say Hi`;
  }
  sayHey = () => `Say Hey`;
}

let user1 = new User("Osama", "Elzero", 37, "o@nn.sa");
console.log(user1.name.first);
console.log(user1.name.last);
console.log(user1.age);
console.log(user1.email);
console.log(user1.sayHello());
console.log(user1.sayHi());
console.log(user1.sayHey());

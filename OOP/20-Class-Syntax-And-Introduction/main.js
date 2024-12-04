/*
  Class
*/

// function User(name, email) {
//   this.name = name;
//   this.email = email;
//   this.sayHello = () => `Hello ${this.name}`;
//   this.showEmail = () => `Your Email Is ${this.email}`;
// }

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello = () => `Hello ${this.name}`;
  showEmail = () => `Your Email Is ${this.email}`;
}

let user1 = new User("Osama", "o@nn.sa");
let user2 = new User("Ahmed", "A@mm.sa");

console.log(user1);
console.log(user2);

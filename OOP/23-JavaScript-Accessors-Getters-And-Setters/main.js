/*
  JavaScript Accessors
  Getters & Setters
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
  get showInfo() {
    return `Name: ${this.name}, Email" ${this.email}`;
  }
  changeName(newName) {
    this.name = newName;
  }
  set changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user1 = new User("Osama", "o@nn.sa");

console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

user1.changeName("Mahmoud");
console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

user1.changeEmail = "oooooo@gmail.com";
console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

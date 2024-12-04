/*
  Constructor Function
  60% To 70%
  Trainings
*/

function User(name, email, age, showEmail) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.updateName = (newName) =>
    this.age > 18
      ? (this.name = newName)
      : console.log(`You Cant Update Name Becouse Of Age Restricion`);
  this.showEmail = () =>
    showEmail ? `Email IS: ${this.email}` : `Data Is Private`;
}

let user1 = new User("Osama", "o@nn.sa", 3, false);

console.log(user1);
console.log(user1.name);
user1.updateName("Ahmed");
console.log(user1.name);
console.log(user1.showEmail());

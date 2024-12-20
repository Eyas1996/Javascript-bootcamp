/*
  Constructor Function
  Dealing With Properties
  40% to 60%
*/

function User(fName, lName, age, country) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  this.country = country;
  this.fullName = () => `Your Full Name is: ${this.fName} ${this.lName}`;
  this.ageInDays = () => `Your Age in Days is: ${this.age * 365}`;
}

let user1 = new User("Eyas", "Hamad", 26, "Syria");
let user2 = new User("Osama", "Elzero", 37, "Egypt ");

console.log(user1);
console.log(`Your Full Name is: ${user1.fName} ${user1.lName}`);
console.log(user1.fullName());
console.log(user1.ageInDays());
console.log(user2);
console.log(user2.country);
console.log(user2.fullName());
console.log(user2.ageInDays());

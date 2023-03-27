/*
  Object
  - Intro and What Is object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  sayHello: function () {
    return "Hello " + user.theName;
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

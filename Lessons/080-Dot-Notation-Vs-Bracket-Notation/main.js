/*
  Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/
let myVar = "country";
let user = {
  theName: "Osama",
  country: "Egypt",
};
console.log(user); // => {theName: 'Osama', country: 'Egypt'}
console.log(user.theName); // => Osama
console.log(user.myVar); // => undefined
console.log(user[myVar]); // => Egypt

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// Test => true or false
console.log(/ing$/gi.test(myString)); // true
console.log(/^we/gi.test(myString)); // true
console.log(/az$/gi.test(names)); // true
console.log(/^1/gi.test(names)); // true
console.log(/^\d/gi.test(names)); // true
console.log(/^\w/gi.test(names)); // true
console.log(/^\S/gi.test(names)); // true

// Match => match and return it if it's matched
let end = /ing$/gi;
console.log(myString.match(end));
// -----------------------------------
let followed = /\d\w{5}(?=z)/gi;
console.log(names.match(followed));
// -----------------------------------
let notFollowed = /\d\w{8}(?!z)/gi;
console.log(names.match(notFollowed));

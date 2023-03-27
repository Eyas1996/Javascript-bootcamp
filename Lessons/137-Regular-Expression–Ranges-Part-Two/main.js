/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaBbcdefG123!234%^&*";

let aToZSmall = /[a-z]/g; // =>  [a-z]
console.log(myString.match(aToZSmall)); // => ['a', 'b', 'c', 'd', 'e', 'f']
// ----------------------------------------------------------------------------

let NotAToZSmall = /[^a-z]/g; // =>  [^a-z]
console.log(myString.match(NotAToZSmall)); // => ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// ----------------------------------------------------------------------------

let aToZCapital = /[A-Z]/g; // =>  [A-Z]
console.log(myString.match(aToZCapital)); // =>  ['A', 'B', 'G']
// ----------------------------------------------------------------------------

let NotAToZCapital = /[^A-Z]/g; // =>  [^A-Z]
console.log(myString.match(NotAToZCapital)); // =>  ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// ----------------------------------------------------------------------------

let aAndcAnde = /[ace]/g; // =>  [ace]
console.log(myString.match(aAndcAnde)); // => ['a', 'c', 'e']
// ----------------------------------------------------------------------------

let NotaAndcAnde = /[^ace]/g; // =>  [^ace]
console.log(myString.match(NotaAndcAnde)); // => ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// ----------------------------------------------------------------------------

// let lettersCapsAndSmall = /[a-z]/gi;
let lettersCapsAndSmall = /[a-zA-Z]/g;
console.log(myString.match(lettersCapsAndSmall)); // => ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
// ----------------------------------------------------------------------------

let numsAndSpecials = /[^a-zA-Z]/g;
console.log(myString.match(numsAndSpecials)); // => ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// ----------------------------------------------------------------------------

let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(specials)); // => ['!', '%', '^', '&', '*']
// ----------------------------------------------------------------------------

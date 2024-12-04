/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

// let regex = /elzero/i;

// let regex = /elzero/g;

let regex = /Elzero/gi;

// console.log(myString.match(/Elzero/));

console.log(myString.match(regex));

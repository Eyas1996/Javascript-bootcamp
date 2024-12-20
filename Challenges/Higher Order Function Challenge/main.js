/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution1 = myString.split("").filter(function (a) {
//   return isNaN(parseInt(a)) && a !== ","
// }).slice(1, -1).map(function (ele) {
//   return ele.startsWith("_") ? " " : ele
// }).reduce(function (acc, current) {
//   return `${acc}${current}`
// });
// console.log(solution1); // Elzero Web School

let solution1 = myString
  .split("")
  .filter((a) => isNaN(parseInt(a)) && a !== ",")
  .slice(1, -1)
  .map((ele) => (ele.startsWith("_") ? " " : ele))
  .reduce((acc, current) => `${acc}${current}`);
console.log(solution1); // Elzero Web School

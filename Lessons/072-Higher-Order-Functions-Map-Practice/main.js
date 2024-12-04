/*
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore boolean Value
    */

// ---------------------------------------------------
// Swap Cases
let swappingCases = "elZERo";
console.log(swappingCases);
// let sw = swappingCases.split("").map(function (element) {
//   // Condition ? True : False
//   return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()
// }).join("")
// console.log(sw);

/*** Arrow Function Version ***/
let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(sw);
// ---------------------------------------------------
// - Inverted Numbers
let invertedNumbers = [1, -10, -20, 15, 100, -30];
console.log(invertedNumbers);
// let inv = invertedNumbers.map(function (element) {
//   return -element;
// });

/*** Arrow Function Version ***/
let inv = invertedNumbers.map((a) => -a);
console.log(inv);
// ---------------------------------------------------
// - Ignore boolean Value (Ignore Numbers)
let ignoreNumbers = "Elz123er4o";
console.log(ignoreNumbers);
let ign = ignoreNumbers
  .split("")
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .join("");

/*** Arrow Function Version ***/
// let ign = ignoreNumbers.split("").map((a) => isNaN(parseInt(a)) ? a : "").join("");
console.log(ign);
// ---------------------------------------------------

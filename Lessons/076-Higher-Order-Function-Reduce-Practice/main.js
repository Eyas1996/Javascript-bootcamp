/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log("###################");
  return acc.length > current.length ? acc : current;
});
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
// Solve It With Join Method
// let finalString = removeChars.filter(function (element) {
//   return !element.startsWith("@");
// }).join("");
// -------------------------------------------------------------
// Solve It With Reduce Function
let finalString = removeChars
  .filter(function (element) {
    return !element.startsWith("@");
  })
  .reduce(function (acc, current) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(acc + current.toLowerCase());
    console.log("###################");
    return acc + current.toLowerCase();
  });
console.log(finalString);

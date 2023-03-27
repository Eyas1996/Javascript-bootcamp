/*
  Prototype
*/

let myString = "Osama";

console.log(String.prototype);

String.prototype.zFill = function (width) {
  console.log("This is => " + this);
  let theResult = this;

  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }
  return theResult;
};
console.log("12".zFill(6));
console.log("516".zFill(6));
console.log("3652".zFill(6));
console.log("25145".zFill(6));
console.log("888888".zFill(6));

String.prototype.sayYouLoveMe = function () {
  return `I Love You ${this}`;
};
console.log("Osama".sayYouLoveMe());
console.log("Eyas".sayYouLoveMe());

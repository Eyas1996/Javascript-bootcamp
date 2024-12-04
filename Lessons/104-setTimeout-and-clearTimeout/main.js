/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log(`Msg`);
// }, 3000);

// setTimeout(sayMsg, 3000);
// function sayMsg() {
//   console.log(`Iam Msg`);
// };

// setTimeout(sayMsg, 3000, "Osama", 38);
// function sayMsg(user, age) {
//   console.log(`Iam Msg For ${user} His Age Is: ${age}`);
// };

let counter = setTimeout(sayMsg, 3000);
function sayMsg() {
  console.log(`Iam Msg`);
}
// console.log(counter);

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

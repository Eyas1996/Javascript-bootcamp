/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log(`Message Form Onclick One`);
// };
// function two() {
//   console.log(`Message Form Onclick two`);
// };

// window.onload = "Osama";

// myP.addEventListener("click", () => {
//   console.log(`Message Form Onclick 1 Event`);
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
// myP.addEventListener("click", "String"); // Error
let counter = "";
myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  newP.textContent = `${++counter}. ${myP.textContent}`;
  document.body.appendChild(newP);
};
let cloned = document.querySelector(".clone");

// cloned.addEventListener("click", () => {
//   console.log(`I'm cloned`);
// }); // Error

document.addEventListener("click", (e) => {
  if (e.target.className === "clone") {
    console.log("I'm Cloned");
  }
});

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
console.log(location);
console.log(location.href);

// location.href = "https://google.com"; // it doesn't delete the entry form our History Search.
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";
// ----------------------------------------------------
// console.log(location.host);
// console.log(location.hostname);
// ----------------------------------------------------
// console.log(location.protocol);
// ----------------------------------------------------
// console.log(location.hash);
// ----------------------------------------------------
let btn = document.querySelector("button");
btn.onclick = () => {
  location.reload();
};
// ----------------------------------------------------
// location.replace("https://elzero.org"); // to replace the page in history
// ----------------------------------------------------
// location.assign("https://google.com"); // to give me new URL, and save the entry form the current page in the History.

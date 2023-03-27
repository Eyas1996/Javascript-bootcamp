/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

console.log(myP);
myP.id = `${myP.id}-clone`;
myDiv.appendChild(myP);

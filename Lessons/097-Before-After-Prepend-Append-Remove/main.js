/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
// to delete the Element completely form the DOM Tree
// element.remove();

let createdP = document.createElement("p");

// element.before(createdP); // => Before The Div Element
// element.after(createdP); // => After The Div Element
// element.prepend(createdP); // => inside(But in the beginning) OF The Div Element
element.append(createdP); // => inside(But in the End) OF The Div Element

// console.log(element);

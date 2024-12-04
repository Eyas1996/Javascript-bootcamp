/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let two = document.querySelector(".two");
let one = document.querySelector(".one");

window.onload = () => {
  two.focus();
};

one.onblur = () => {
  document.links[0].click();
};

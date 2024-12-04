/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
let span = document.querySelector(".two");

console.log(span.previousSibling);
console.log(span.previousElementSibling);
console.log(span.nextSibling);
console.log(span.nextElementSibling);
console.log(span.parentElement);

span.onclick = () => {
  span.parentElement.remove();
};

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama")); // false
console.log(element.classList.contains("show")); // true
console.log(element.classList.item("3")); // class name with the index 3 => test

element.onclick = () => {
  element.classList.add("add-one", "add-two"); // to add new class
  element.classList.remove("one", "two"); // to remove class name
  element.classList.toggle("osama"); // to remove class or add it if it not exist
  element.classList.toggle("show"); // to remove class or add it if it not exist
};

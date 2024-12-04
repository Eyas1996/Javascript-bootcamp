/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.setItem("bgColor", "#0FFaaa");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One Item
// window.localStorage.removeItem("color");
// window.localStorage.removeItem("fontWeight");
// window.localStorage.removeItem("randid");

// Remove All
window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));
console.log(window.localStorage.key(1));
console.log(window.localStorage.key(2));
console.log(window.localStorage.key(3));

// Set Color In Page
let mainBGColor = window.localStorage.getItem("bgColor");
document.body.style.backgroundColor = mainBGColor;

console.log(window.localStorage);
console.log(typeof window.localStorage);

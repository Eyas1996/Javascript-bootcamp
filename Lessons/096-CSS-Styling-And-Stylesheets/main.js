/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

let element = document.getElementById("my-div");
element.style.color = "#f00";
element.style.backgroundColor = "#f2f2f2";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: #0f0; opacity: 0.9";

// To remove Property form inline CSS
element.style.removeProperty("color");

// To Set Property form inline CSS
element.style.setProperty("font-size", "40px", "important");

// To remove Property form external CSS
document.styleSheets[0].rules[0].style.removeProperty("line-height");

// To remove Property form external CSS
document.styleSheets[0].rules[0].style.setProperty("background-color", "red");

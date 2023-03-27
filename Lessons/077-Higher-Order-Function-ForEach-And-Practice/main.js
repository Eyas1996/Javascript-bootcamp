/*
  - forEach
  --- method executes a provided once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) {}, thisArg).
  - Element => The Current element being processed in the array.
  - Index => The Index of the current element being processed in the array.
  - Array => The Current Array.

  Note
  - Doesn't Return Anything [Undefined].
  - Break Will Not Break The Loop.
*/
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class Form All Element
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

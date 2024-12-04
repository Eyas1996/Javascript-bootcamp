/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let btn = document.getElementById("btn");

btn.onmouseleave = () => {
  console.log("Clicked");
};

window.onscroll = () => {
  console.log("scrolling");
};

let numOfElement = document.querySelector("[name='elements']");
let textOfElement = document.querySelector("[name='texts']");
let bgOfElement = document.querySelector("[name='bgColor']");
let btn = document.querySelector("[name='create']");
let divOption = document.querySelector("[value='Div']");
let sectionOption = document.querySelector("[value='Section']");
let parent = document.querySelector(".results");

// لمنع السوك الافتراضي|| To don't refresh the Page when it's submit it.
document.forms[0].onsubmit = (e) => {
  let refresh = false;
  if (refresh === false) e.preventDefault();
};
btn.onclick = function () {
  parent.innerHTML = ""; // => to Delete the old Elements
  if (numOfElement.value <= 0 || textOfElement.value.length <= 0) {
    alert("Invalid Input");
  } else {
    for (let i = 0; i < numOfElement.value; i++) {
      // To Select the Type of the created Elements
      let eleType = "";
      divOption.selected ? (eleType = "div") : (eleType = "section");
      console.log("=>" + eleType);
      // To Create Elements
      let element = document.createElement(eleType);
      element.textContent = textOfElement.value;
      element.className = `box`;
      element.title = `Element`;
      element.id = `id-${i + 1}`;
      element.style.backgroundColor = bgOfElement.value;
      parent.appendChild(element);
    }
  }
};
// Task06

// You have an input field in which to type the number of items you want to create
// You have an input field to type in the word that will appear inside the element
// You have another field that contains the type of element whether it is Div or Section
// You have a button to start the creation process
// When clicking on Create Items, make sure that any old items that have been created will be removed first
// You can make CSS styles in JavaScript if you want to practice styling in JavaScript
// You can do the styling normally with CSS without any problem
// Make sure that the form does not send data so that the page does not refresh
// The element contains an ID, a Class, and the ID number increases with each element. Watch the example required to understand

// The required result inside the results div is as follows, according to the number you chose (for exmple 3) and the type of the element (for exmple div) it should be like this...

// <div class="box" title="Element" id="id-1">Hello</div>
// <div class="box" title="Element" id="id-2">Hello</div>
// <div class="box" title="Element" id="id-3">Hello</div>

// in below link you can see it live ...
// https://elzero.org/wp-content/uploads/2021/09/create-elements.gif

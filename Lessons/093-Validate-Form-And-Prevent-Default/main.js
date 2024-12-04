/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/
let userInput = document.querySelector('[name="username"]');
let ageInput = document.querySelector('[name="age"]');

document.forms[0].onsubmit = (e) => {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  } else {
    alert("Invalid Input!");
  }
  if (ageInput.value !== "") {
    ageValid = true;
  } else {
    alert("Invalid Input!");
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onclick = (event) => {
  console.log(event);
  // لمنع السوك الافتراضي
  event.preventDefault();
};

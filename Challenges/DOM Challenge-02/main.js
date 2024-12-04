// Task02 => a challenge

// See the following figure
// You have two input fields, one to add Classes to the Current element and the other to delete Classes from the Current element
// The addition process takes place as soon as you exit the Blur input field
// Ensure that the class name is added as Small Letters regardless of the entry
// If a person writes two words with spaces between them, they are added as Two Classes or deleted as Two Classes as well
// When exiting the input field, be sure to delete the value in it
// You must make sure that the field is not empty before leaving it, so that no error appears
// You should make a Function to be fired each time you exit an input field
// The function of the function is to display the Classes on the Current element in place of the result below
// The Function sorts the names of the Classes alphabetically before displaying them
// If there are no Classes on the element, the message "No Classes To Show" is displayed.

// See the figure to see what is required => https://elzero.org/wp-content/uploads/2021/09/dom-assignment-two.gif

let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let element = document.querySelector('[title="Current"]');
let result = document.getElementById("result");

function displayClasslist() {
  result.innerHTML = "";
  if (element.classList.value === "") {
    result.innerHTML = "No Classes To Show";
  } else {
    element.classList.value
      .split(" ")
      .sort()
      .map((ele) => {
        let mySpan = document.createElement("span");
        mySpan.textContent = ele;
        result.appendChild(mySpan);
      });
  }
}
displayClasslist();

addInput.onblur = () => {
  if (addInput.value !== "") {
    element.classList.add(addInput.value.toLowerCase());
  }
  displayClasslist();
  addInput.value = "";
};

removeInput.onblur = () => {
  if (removeInput.value !== "") {
    element.classList.remove(removeInput.value.toLowerCase());
  }
  displayClasslist();
  removeInput.value = "";
};

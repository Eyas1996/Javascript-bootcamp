/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/
// -----------------------------------------------------------------
/*Alert*/
// window.alert("Test01");
// this.alert("Test02");
// alert("Test03");

// alert("Test");
// console.log("Test");

// https://sweetalert2.github.io/

// ----------------------------------------------------------------
/*Confirm*/
// let confirmMsg = confirm("Are You Sure?");
// console.log(confirmMsg);

// if (confirmMsg) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// };
// ----------------------------------------------------------------
/*Prompt*/
let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");
console.log(promptMsg);
// ---------------------------------------------------------------

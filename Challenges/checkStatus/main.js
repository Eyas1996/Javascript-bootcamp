/*
function checkStatus(a, b, c) {
  let theData = [a, b, c];
  let theName = "";
  let theAge = "";
  let theStatus = "";
  for(let i = 0; i < theData.length; i++) {
    if (typeof theData[i] === "string") {
      theName = theData[i];
    }else if (typeof theData[i] === "number") {
      theAge = theData[i];
    }else if ((typeof theData[i] === "boolean") && (theData[i] === true)) {
      theStatus = "Available";
    } else {
      theStatus = "Not Available"
    }
  }
  console.log(`Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`);
}
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  checkStatus(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  checkStatus(38, true, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus("Osama", true, 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
*/
// ***************************************************************************************
// ***************************************************************************************
// function checkStatus(a, b, c) {
//   // Your Code Here
//   let name = "";
//   let age = 0;
//   let status = true;
//   name = myValue(a, b, c, "string");
//   age = myValue(a, b, c, "number");
//   status = myValue(a, b, c, "boolean");
//   printMessage(name, age, status);
// }
// function myValue(a, b, c, type) {
//   if (typeof a === type) {
//     return a;
//   }
//   if (typeof b === type) {
//     return b;
//   }
//   if (typeof c === type) {
//     return c;
//   }
// }
// function printMessage(name, age, status) {
//   let statusMsg = "";
//   if (!status) {
//     statusMsg += "Not ";
//   }
//   console.log(
//     "Hello " +
//       name +
//       ", Your Age Is " +
//       age +
//       ", You Are " +
//       statusMsg +
//       "Available For Hire"
//   );
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// checkStatus(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// checkStatus(38, true, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus("Osama", true, 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"

// ***************************************************************************************
// ***************************************************************************************

// } else if ((typeof a === "number") && (!typeof c === "string")) {
//   console.log(
//   `Hello ${b}, Your Age Is ${a}, You Are ${c} For Hire`
// );
// } else if (typeof a === "boolean" && a === true) {
//   console.log(
//   `Hello ${c}, Your Age Is ${b}, You Are ${a} For Hire`
// );
// } else {
//   return a = "Not Available";
// }
//   console.log(
//   `Hello ${a}, Your Age Is ${b}, You Are ${c} For Hire`
// );

//   function checkStatus(a, b, c) {
//   let theData = [a, b, c];
//   for (let i = 0; i < theData.length; i++) {
//   if (typeof theData[i] === "string") {
//     let theName = theData[i];
//   } else if (typeof theData[i] === "number") {
//     let theAge = theData[i];
//   } else if (typeof theData[i] === "boolean" && theData[i] === true) {
//     let theStatus = "Available";
//   } else {
//     theStatus = "Not Available";
//   }
// }
//   console.log(
//     `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`
//   );
// }

// Needed Output
//   console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//   console.log(checkStatus(38, false, "Osama")); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//   console.log(checkStatus(38, true, "Osama")); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//   console.log(checkStatus("Osama", true, 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ***************************************************************************************
// ***************************************************************************************

// ******* the longest one ********
//  function checkStatus(a, b, c) {
//   let  theName = "";
//   let  theAge = "";
//   let  theStatus = false;
//   if ((typeof a === "string") && (typeof b === "number") && (typeof c === "boolean" && c === true)) {
//     theName = a;
//     theAge = b;
//     theStatus = "Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
//   } else if ((typeof a === "string") && (typeof b === "boolean" && b === true) && (typeof c === "number")) {
//     theName = a;
//     theAge = c;
//     theStatus = "Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
//   } else if ((typeof a ==="number" ) && (typeof b === "string") && (typeof c === "boolean" && c === true)) {
//     theName = b;
//     theAge = a;
//     theStatus = "Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
//   } else if ((typeof a ==="number" ) && (typeof b === "boolean" && b === true) && (typeof c === "string")) {
//     theName = c;
//     theAge = a;
//     theStatus = "Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
//   } else if ((typeof a ==="boolean" && a === true) && (typeof b === "string") && (typeof c === "number")) {
//     theName = b;
//     theAge = c;
//     theStatus = "Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
//   } else if ((typeof a ==="boolean" && a === true) && (typeof b === "number") && (typeof c === "string")) {
//     theName = c;
//     theAge = b;
//     theStatus = "Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
//   } else if ((!a) && (b === "number")) {
//     theName = c;
//     theAge = b;
//     theStatus = "Not Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
//   } else if ((!a) && (c === "number")) {
//     theName = b;
//     theAge = c;
//     theStatus = "Not Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
// } else if ((!b) && (a === "number")) {
//     theName = c;
//     theAge = a;
//     theStatus = "Not Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
// } else if ((!b) && (c === "number")) {
//     theName = a;
//     theAge = c;
//     theStatus = "Not Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
// } else if ((!c) && (a === "number")) {
//     theName = b;
//     theAge = a;
//     theStatus = "Not Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
// } else if ((!c) && (b === "number")) {
//     theName = a;
//     theAge = b;
//     theStatus = "Not Available";
//     return `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`;
// }
// }
//   // Needed Output
//   console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//   console.log(checkStatus(38, false, "Osama")); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//   console.log(checkStatus(38, true, "Osama")); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//   console.log(checkStatus("Osama", true, 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// ***************************************************************************************
// ***************************************************************************************

let theName = "";
let theAge = "";
let theStatus = "";
function checkStatus(a, b, c) {
  let theData = [a, b, c];
  for (let i = 0; i < theData.length; i++) {
    if (typeof theData[i] === "string") {
      theName = theData[i];
    } else if (typeof theData[i] === "number") {
      theAge = theData[i];
    } else if (typeof theData[i] === "boolean" && theData[i] === true) {
      theStatus = "Available";
    } else {
      theStatus = "Not Available";
    }
  }
  console.log(
    `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`
  );
}

//   // Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(38, true, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus("Osama", true, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// ***************************************************************************************
// ***************************************************************************************

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

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(25, false, "Ali");
checkStatus(25, true, "Eyas");
checkStatus("Anas", true, 27);

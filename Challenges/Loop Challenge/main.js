/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Kamal", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Kim",
  "Karam",
];

for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
}

document.write(`<div id="container">We Have X Admins`);

document.write(`<div>We Have ${i} Admins</div>`);
document.getElementById("container").style.backgroundColor = "#07efca";
document.getElementById("container").style.width = "600px";
document.getElementById("container").style.textAlign = "center";
document.getElementById("container").style.margin = "20px auto";
document.write(`<hr>`);

for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  } else {
    document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);

    let counter = 0;
    for (j = 0; j < myEmployees.length; j++) {
      if (myEmployees[j][0] === myAdmins[i][0]) {
        document.write(`<p>-${++counter} ${myEmployees[j]}</p>`);
      }
    }

    document.write(`<hr>`);
    document.write(`</div>`);
  }
}

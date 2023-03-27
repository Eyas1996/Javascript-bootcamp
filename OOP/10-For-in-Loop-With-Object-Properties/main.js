/*
  For ... In Loop
  Loop Through The Properties Of The Objects
*/

const user = {
  name: "Osama",
  country: "Egypt",
  age: 37,
};

let finalData = "";

for (let key in user) {
  // console.log(`the ${info}: is => ${user.info}`);
  // console.log(`the ${info}: is => ${user[info]}`);
  finalData += `<div>the ${key}: is => ${user[key]}</div>`;
}

// console.log(user.country);
// console.log(user["country"]);

console.log(finalData);
document.getElementById("info").innerHTML = finalData;

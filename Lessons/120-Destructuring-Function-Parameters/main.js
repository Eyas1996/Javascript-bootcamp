/*
  Destructuring
  - Destructuring Function Parameters
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Name Is ${obj.theAge}`);
//   console.log(`Your Css Skill Progress Is ${obj.skills.css}%`);
// }

// Destructuring
function showDetails({ theName: n, theAge: a, skills: { css } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Name Is ${a}`);
  console.log(`Your Css Skill Progress Is ${css}%`);
}

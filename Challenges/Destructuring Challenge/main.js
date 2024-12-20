/*
  Destructuring
  - Challenge
*/
// You have an Array that contains a set of Objects containing people data
// Do the Destructuring Assignment to get the desired result at the end inside the console
// If the value of the chosen Variable is 1, it fetches the data of the first person, and if it is 2, the second person, and so on
// Note that the output changes according to the available variable
// See the example to understand what is required

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  {
    title: "Ahmed",
    age: 25,
    available: false,
    skills: ["Python", "Django"],
  },
  {
    title: "Sayed",
    age: 33,
    available: true,
    skills: ["PHP", "Laravel"],
  },
];

// Write Your Code Here
let [] = myFriends;

if (chosen === 1) {
  [
    {
      title: t,
      age: a,
      available: st,
      skills: [, two],
    },
  ] = myFriends;
} else if (chosen === 2) {
  [
    ,
    {
      title: t,
      age: a,
      available: st,
      skills: [, two],
    },
  ] = myFriends;
} else if (chosen === 3) {
  [
    ,
    ,
    {
      title: t,
      age: a,
      available: st,
      skills: [, two],
    },
  ] = myFriends;
}

console.log(t);
console.log(a);
if (st) {
  console.log("Available");
} else {
  console.log("Not Available");
}
console.log(two);

// If chosen === 1

("Osama");
39;
("Available");
("CSS");

// If chosen === 2

("Ahmed");
25;
("Not Available");
("Django");

// If chosen === 3

("Sayed");
33;
("Available");
("Laravel");

/*
  Object
  - Nested Object And trainings
*/

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    return user.available ? "Free For Work" : "Not Free";
  },
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // => Access With Index
console.log(user.available);
console.log(user.addresses);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"].one);
console.log(user["addresses"]["egypt"]["one"]);
console.log(user.checkAv());

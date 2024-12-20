// Form Tasks 079 To 085
/*
  Object Challenge
  - The Main Object contains Three Nested Objects.
  - They are the same in every way except that one of them does not contain the game versions.
  - Loop For should only be used to loop elements.
  - All you have to do is solve the instructions and fill in the blanks to reach the desired result.
  - You must not change the structure of the code and all you have to write your code in place of the question marks.
*/

/* Some Info */
// keys Method return value
// An array of strings representing the given object's own enumerable   string-keyed property keys.

// Description
// Object.keys() returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.keys() is the same as that provided by a for...in loop.
// If you need the property values, use Object.values() instead. If you need both the property keys and values, use Object.entries() instead.

/* hasOwnProperty.... */
// method returns true if the object has the specified property as own property; false otherwise.

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);

for (let i = 0; i < objectLength; i++) {
  let name = Object.keys(myFavGames)[i];
  console.log(`The Game Name Is ${name}`);
  console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
  console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[name].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[name].bestThree.one}`);
    console.log(`Second => ${myFavGames[name].bestThree.two}`);
    console.log(`Third => ${myFavGames[name].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Needed Ouput
("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");

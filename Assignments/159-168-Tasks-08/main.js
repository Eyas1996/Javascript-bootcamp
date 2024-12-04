// assignment 08
// You have the line below in the main file Main.js that is a Function that accepts three values and sums them
// Create the mod-one.js file which contains this Function with 3 Parameters
// The function must be unnamed and do the necessary work in the file to be able to use it in the main.js file
// Create a mod-two.js file
// Copy into it the three variables below and never modify them
// Write whatever you want in the mod-two.js file so that the code in the main.js file works properly

import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(
  "Your Solution Here => ",
  Array.from([...n1, ...n2]).length * Math.max(...n2)
); // 210
console.log("Your Solution Here => ", [...n1, ...n2].length * Math.max(...n2)); // 210
console.log("Your Solution Here => ", n2.length * [n1.reduce((a, b) => a + b)]); // 210
// Needed Output
// 210;

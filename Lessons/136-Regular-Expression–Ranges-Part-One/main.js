/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/
// (X|Y) => X Or Y
let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

// [0-9] => 0 To 9
let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

// [^0-9] => Any Character Not 0 To 9
let notNums = "12345678910";
let notNumsRe = /[^0-2]/g;
console.log(notNums.match(notNumsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

// Practice
let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceNumsRe = /os[5-9]os/gi;
console.log(practice.match(practiceNumsRe));

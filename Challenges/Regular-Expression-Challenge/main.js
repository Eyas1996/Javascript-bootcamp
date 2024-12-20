/*
  Regular Expression
  - Challenge
    // You have a bunch of links
    // Only one Pattern is required to make a match for all of these links
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "https://www.redi-school.org/web-development/munich/dcp/frontend2";
let url7 =
  "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript";
let url8 = "https://developer.mozilla.org/en-US/";
let url9 = "https://codepen.io/eyas1996/pen/oNPNPLy?editors=0012";
let url10 = "https://cssbattle.dev/play/112";
let url11 =
  "https://auth.udacity.com/sign-in?next=https%3A%2F%2Fclassroom.udacity.com%2Fauthenticated";

let re =
  /(https?:\/\/)?((\w+)?(\.)?(\w+)?(\-)?(\w+)?(\.)?)?(\w+)?(\.)?(com|):?((\d+)?(\W)?(\w+)?(\-)?)+/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));
console.log(url8.match(re));
console.log(url9.match(re));
console.log(url10.match(re));
console.log(url11.match(re));

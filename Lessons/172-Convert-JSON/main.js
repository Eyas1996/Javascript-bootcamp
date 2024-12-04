/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

const myJsonObjectFormServer = '{"UserName": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFormServer);
console.log(myJsonObjectFormServer);

// To Converts a JavaScript Object Notation(JSON) String into a JavaScript Object
const myJsObject = JSON.parse(myJsonObjectFormServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Examples (we need to change some values and send it back to the Server)....
myJsObject["UserName"] = "Eyas";
myJsObject["Age"] = 26;

// A JavaScript value, usually an object or array, to be converted.
// To Converts a JavaScript Vlaue into a JavaScript Object Notation(JSON) String.
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video
// // Change Book Value
// book = video; // Book
// // Change Video Value
// video = stash; // Video

// With Swapping Destructuring
[book, video] = [video, book]; // => [book, video] = ["Book", "Video"];

console.log("This Is the Book Value  => " + book);
console.log("This Is the Video Value => " + video);

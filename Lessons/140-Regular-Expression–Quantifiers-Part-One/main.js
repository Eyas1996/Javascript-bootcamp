/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w@\w\w.sa/gi; // => ['o@nn.sa']
// let mailsRe = /\w\w\w\w\w@\w\w\w\w\w.(com|net)/g; // => ['osama@gmail.com', 'lzero@gmail.net']
// let mailsRe = /\w+@\w+.(com|net)/gi; // => ['osama@gmail.com', 'lzero@gmail.net']
// let mailsRe = /\w+@\w+.(\w\w\w)/gi; // =>  ['osama@gmail.com', 'elzero@gmail.net']
let mailsRe = /\w+@\w+.(\w+)/gi; // =>  ['o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@mail.ru']
console.log(mails.match(mailsRe));
// -------------------------------------------------------------------------------------------------------
let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));
// -------------------------------------------------------------------------------------------------------
let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /https?\W+\w+.(net|com)/gi;
// let urlsRe = /https?:\/\/(www.)?\w+.(com|net)/gi;
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

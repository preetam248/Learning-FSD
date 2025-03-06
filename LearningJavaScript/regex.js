//* Regex

let str = "preetamdas248@gmail.com"

// console.log(str.includes("@"))
// console.log(str.endsWith("com"))

//* Declaring Regex:
// -> Constructor : new RegExp("")
// -> Literal : /  /


// let pattern = new RegExp("das");

// The test() method tests for a match in a string.
// If it finds a match, it returns true, otherwise it returns false.

// let result = pattern.test(str)
// console.log(result)


// let pattern2 = /gmail/

// let result2 = pattern2.test(str);

// console.log(result2);

// let result3 = pattern2.exec(str)
// console.log(result3)

// console.log(str.match(pattern2))
// console.log(str.replace(pattern2, "yeahoo"))
// console.log(str.replace("gmail", "yeahoo"))
// console.log(str)


/* 
* Regex Character:
+ : 1 or more
* : 0 or more
? : optional letter
^ : string is started with the character/word or not
$ : string is ended with the character/word or not
[]: giving range or option 
{}: number of repetitive char 
\d: search for digit
\D: search for non numerical
\w: search for alpha numerical
\W: search for non alpha numerical
\s: search for white space
\S: search for non white space
*/

let myStr = "I am Preetam and I am aaaa"

// let myPattern = /^[AEIOU]/
// let myPattern = /a{2,5}/
// let myPattern = /\D/

// console.log(myPattern.test(myStr))

let emailValidation = /^[a-zA-Z0-9]+[0-9]*@[A-Za-z]+.[a-zA-Z]+$/

console.log(emailValidation.test(str));

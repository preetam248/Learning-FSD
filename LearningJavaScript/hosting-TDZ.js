/*
* Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current    script or the current function).

In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.

* Hosting only work with var keyword and traditional function

JavaScript only hoists declarations, not initializations.
*/

var x = 5;
y = 6;
console.log(x + y);
var y;

sayHello();//allow

function sayHello() {
    console.log("Hello");
}


greet(); // does not allow
let greet = () => {
    console.log("Good Morning");
}


//* TDZ: Temporal Dead Zone 
// works only with let and const to overcome hosting behavior
//* call - bind - apply

let person = {
    name: "Preetam",
    greet: function (greeting) {
        console.log(`Hi ${this.name}, ${greeting}`)
    }
}

let anotherPerson = {
    name: "Ankush",
}

person.greet("Good morning");

//* call: pass the this binding/context of an object to another object

person.greet.call(anotherPerson, "Good night");

//* Apply: attach this binding/contest of an obj to another obj and allow to pass the arguments as an array

let arguments = ["Good afternoon", "Good morning"];
person.greet.apply(anotherPerson, arguments);

//* Bind: attach this binding/contest of an obj to another obj and return and function [which can be call anytime]

let newReturnFunc = person.greet.bind(anotherPerson);

newReturnFunc("Good Evening");
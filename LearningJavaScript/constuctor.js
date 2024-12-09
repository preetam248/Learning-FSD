function Person(name) {
    this.name = name;

    this.sayHi = function () {
        console.log(`Hi, ${this.name}`);
    }
}
// console.log(typeof Person); //function
// console.log(typeof new Person); //object

const personOne = new Person("Maddy");
const personTwo = new Person("Gonesh");

// personOne.sayHi()
// personTwo.sayHi()

console.log(Object.getOwnPropertyNames(Person));
console.log(Object.getOwnPropertyNames(new Person));
console.log(Object.getOwnPropertyNames(personOne));

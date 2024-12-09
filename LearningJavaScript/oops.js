class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }

    showDetails() {
        console.log(`${this.name}, ${this.age}, ${this.place}`);
    }

    static test() { // * Static method or properties access by class name 
        console.log("I am a test method");
    }
}


const person1 = new Person("Preetam", 26, "Serampore");
const person2 = new Person("Sangita", 22, "Rishra");

// person1.showDetails();
// person2.showDetails();

Person.test();  //* Static method

//* Class expression
//* by store class expression in a variable, we can pass it as argument 

const Student = class {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}

const student1 = new Student("Rupak");
// student1.sayHello();

// console.log(typeof person1) //object
// console.log(typeof Person) //function

//* Classes are not hosted,they are in TDZ before declaration


//* Getter and setter
class User {
    constructor(name, password) {
        this.name = name;
        this._password = password;
    }

    get password() {
        return this._password;
    }

    set password(val) {
        this._password = val.toUpperCase();
    }
}

const userOne = new User("Amul", "1234");
// userOne.password = "abc"
// console.log(userOne.password);

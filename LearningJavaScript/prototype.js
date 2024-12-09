//* Prototype is a property(which is an object) of a blueprint

//* __proto__ is a property(which is an object) of a instance

function Person(name) {
    this.name = name;

    this.sayHi = function () {
        console.log(`Hi, ${this.name}`);
    }
}

// console.log(Person.prototype)

Person.prototype.sayBye = function () {
    console.log(`Bye, ${this.name}`);
}

const person1 = new Person("Preetam");

// person1.sayHi()
// person1.sayBye()
// console.log(Person.prototype == person1.__proto__); //true

const student = Object.create(person1);
student.name = "Amit";
student.sayHi()
student.sayBye()
console.log(student.__proto__);



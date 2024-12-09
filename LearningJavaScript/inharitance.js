class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }

    introduce() {
        console.log(`${this.name},${this.age},${this.place}`);
    }

}

class Student extends Person {
    constructor(name, age, place, grade) {
        super(name, age, place);
        this.grade = grade;
    }

    introduce() {  //* Method overriding
        console.log(`${this.name},${this.age},${this.place},${this.grade}`); 
    }
}


const preetam = new Person("Preetam", 26, "Serampore");
const ankush = new  Student("Ankush", 9, "Kolkata", "A+");
// preetam.introduce();
// ankush.introduce();

// ***************************************************************************************************************************
//* uSING cONSTRUCTOR fUNCTION

function CPerson(name,age,place) {
    this.name = name;
    this.age = age;
    this.place = place;
}

CPerson.prototype.CIntro = function () {
    console.log(`${this.name},${this.age},${this.place}`);
}

const koushik = new CPerson("Koushik", 27, "Assam");

function CStudent(name,age,place,grade) {
    CPerson.call(this, name, age, place);
    this.grade = grade;
}
CStudent.prototype.SIntro = function () {
    console.log(`${this.name},${this.age},${this.place},${this.grade}`);
}
const swarnava = new CStudent("Swarnava", 14, "Jadavpur", "A+");

// koushik.CIntro();
// swarnava.SIntro();
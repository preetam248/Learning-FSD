let person = {
    name: "Preetam",
    age: 26,
}

// console.log(person);
//* Constrain with object: 1. keys are always string, 2. Obj don't promise the order of insertion

//* We are using map

let user = new Map();

user.set("username", "Preetam Das");
user.set(10, true);

// console.log(user.get(10));
// console.log(user.has(10));
// console.log(user.delete(10));
// console.log(user)
// user.clear()
// console.log(user)
// console.log(user.size)

// console.log(user.keys());
// console.log(user.values());
// console.log(user.entries());

user.forEach((values,keys,user) => console.log(values));

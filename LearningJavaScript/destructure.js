//* Object destructure

let user = {
    username: "Preetam",
    age: 26,
    city: "Serampore",
}

let { username, age } = user;

console.log(username);
console.log(age);

//* Array destructure

let arr = [1, 2, 3, 4, 5];

let [a, b, ...nums] = arr;

console.log(a, b, nums);

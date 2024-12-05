/**
 * Array characteristic:
 * 1. Indexing
 * 2. Ordered
 * 3. Flexible length
 * 4. Variable datatype
 */

/**
 * Why use array?
 * 1. Organize Data
 * 2. Easy to access
 * 3. Support multiple operations
 */

let str = "Preetam";
let arr = ["Bittu", 26, true];

let obj = {
    person: "Amit",
    age: 18,
    city: "Serampore"
}

for (let item of arr) {
    // console.log(item);
}

// arr.forEach((item) => console.log(item));

/**
 * By split method of string we create array from string
 * By join method of array we create string from array
 */

let numbers = [4, 10, 6, 20, 86, 21];

console.log(numbers.sort((a, b) => a - b));
console.log(numbers)

/**
 * Array sort method do sorting by alphabetically, for numeric sort have to pass call back function
 * sort method alter main array, toSorted() do not alter main array
 * reverse method alter main array, toReversed() do not alter main array
 */
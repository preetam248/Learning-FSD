let arr = [1, 5, 9, 3];
let arr2 = ["preetam", "bittu"];
// console.log(arr.concat(arr2))
// console.log(arr)

/**
 * Use of spread operator:
 * 1. Expanding arrays
 * 2. Combining arrays
 * 3. Expanding objects
 * 4. Combine objects 
 */

let num1 = [1, 2, 3, 4, 5];
let num2 = [21, 31, 41, 51, 61];

let combNums = [...num1, ...num2];
console.log(combNums);


let obj1 = {name: "Preetam"};
let obj2 = {age: 26};

let combObjs = {...obj1,...obj2};
console.log(combObjs);

function add(...nums) {
    return nums.reduce((acc,currVal)=> (acc+currVal),0);
}

console.log(add(1, 2, 3, 4));
function printReverseNumber(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    printReverseNumber(n - 1);
}

// printReverseNumber(10);


function printNumber(n) {
    if (n === 0) {
        return;
    }
    printNumber(n - 1);
    console.log(n);
}

// printNumber(5);


let calculate = {
    value: 0,

    add: function (addNumber) {
        this.value += addNumber;
        return this;
    },

    subtract: function (subNumber) {
        this.value -= subNumber;
        return this;
    },

    multiply: function (mulNumber) {
        this.value *= mulNumber;
        return this;
    },

    showValue: function () {
        return this.value;
    }
}

//* Function chaining

let result = calculate.add(10).subtract(4).multiply(2).showValue();
// console.log(result);

/*
(
    function (name) {
        console.log(`Hello ${name}`)
    }
)("Preetam"); //*IIFE
*/

//* Pure function : Will gave same output for same input. This function has no dependency on values outside the function. There is no side effect

function addTwoNumber(a,b) {
    return a + b;
}

// console.log(addTwoNumber(3,5));
// console.log(addTwoNumber(3,5));
// console.log(addTwoNumber(3,5));



//* Impure function :  Will gave different output for same input. This function has dependency on values outside the function. There will be side effect
    
let count = 0;

function counter(params) {
    count += params;
    return count;
}

// console.log(counter(1));
// console.log(counter(1));
// console.log(counter(1));
// Polyfills: Code snippets which enables the support of newer feature to old environment

let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArr.indexOf(2));

Array.prototype.position = function (ele) {
    let posi = 1;
    for (let item of this) {
        if (item === ele) {
            return posi;
        } else {
            posi++;
        }
    }
    return -1;
}

console.log(myArr.position(2));

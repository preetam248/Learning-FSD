/**
 * Characteristic of Set:
 * 1. Guarantees Uniqueness
 * 2. Preserve order
 */

//* Set is collection of unique data

let phone = new Set();
phone.add(25)
phone.add(15)
phone.add(35)
phone.add(25)
// console.log(phone.values().next().value);

phone.delete(35);
console.log(phone);
console.log(phone.has(25));
phone.clear()
console.log(phone);

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // JS automatically convert string to number
// console.log("02" > 1);

console.log(null > 0); // 1
console.log(null == 0);
console.log(null >= 0); // (3) the null is converted to 0.


// The reason is that an eqality check == and comparison < > >= <= work differently. Comaprisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

// Also These comparison must be avoided because it can cause unexpected results and confusion.


console.log(undefined == 1);
console.log(undefined <= 2); // Comaprison with undefined is always false.

console.log("2" === 2); // Strict Equality, it also check the data type.

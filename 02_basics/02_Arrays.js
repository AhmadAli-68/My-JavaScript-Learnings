const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeroes = ["Dr. Doom", "Iron man", "Spider man"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6)

//? Shallow Copy => A shallow copy of an object whose properties share the same reference means copy me jo change hoga, original me bhi change hoga.

//? Deep copy of an object is a copy whose properties do not share the same reference means copy me jo change hoga, original me change nai hoga.

// console.log(myArr[0]);

//* Array Methods

myArr.push(6);
myArr.push(8) // add the element to th last.
myArr.pop(); // remove the element from the last.

myArr.unshift(9); // add the element to the first position.
myArr.shift(); // remove the 1st element from the start.

console.log(typeof (myArr.includes(8))); // returns true if element is included otherwise false.

const newArr = myArr.join()

console.log(typeof myArr);
console.log(newArr);

//* Slice() and Splice()

//! Slice()

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

//! Splice()

console.log("A ", myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2); // --> splice() will return the removed elements.
console.log("B ", myArr); // --> this is the original updated array
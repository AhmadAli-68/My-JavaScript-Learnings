const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(3));

const otherNumber = 23.890
// console.log(otherNumber.toPrecision(3)); // In simple terms, number ko round off krta hai, closest value me -> 23.890 => 23.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-PK'));

//toLocaleString
//* Converts a number to a string by using the current or specified locale.

//* @param locales — A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.

//! ************************* Maths *************************

// console.log(Math);
// console.log(Math.abs(-4)); //  abs() converts the negative value to positve but positive remains the same.

console.log(Math.round(4.7)); // 5

// console.log(Math.ceil(4.1)); // 5 //? round off to exact number 4.2 => 5

// console.log(Math.floor(4.9, 4.3)); // 4 //? round off to exact low number 4.4 => 4 and 4.9 => 4

// console.log(Math.min(3, 4, 5, 2, 1));
// console.log(Math.max(3, 4, 5, 2, 1));

console.log(Math.random()); // returns a random number between 0 and 1.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
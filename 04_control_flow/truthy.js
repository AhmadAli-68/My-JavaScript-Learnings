const userEmail = []

if (userEmail) {
    console.log("Got the user email");
} else {
    console.log("Didn't got the user email");
}

//! Falsy values

// false
// 0, -0
// BigInt 0n
// "" //? empty string
// null
// undefined
// NaN

//! Truthy values

// "0", 'false' //? truthy value
// " "
// []
// {}
// function(){}

if (userEmail.length === 0) {
    console.log("Array is empty.");
} else {
    console.log("not empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

//? Nullish Coalescing Operator (??): only work for null and undefined

let val1;
// val1 = 5 ?? 10 //? will return 5
// val1 = null ?? 20 //? will return 20
//val1 = undefined ?? 15 //? will return 15
val1 = null ?? undefined ?? 30 //? will return 30

console.log(val1);

//? Ternary Operator

// syntax: //? condition ? true : false

const price = 100

price <= 80 ? console.log("less than 80") : console.log("greater than 80")
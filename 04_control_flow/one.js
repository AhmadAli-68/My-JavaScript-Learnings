//? If statement

const isUserLoggedIn = true
const temperature = 42

// if (temperature === 41) {
//     console.log("less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

//* <, >, <=, >=, ==, ===, !=, !==

const score = 200

// if (score > 100){
//     const power = "run"
//     console.log(`User power is ${power}`);
// }

// console.log(`User power is ${power}`); //! will throw an error because power inside the if block is blocked scope.

const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2") //! non readable code, not a good coding practice.

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less tha  1200");
// }

const userLoggedIn = true
const debitCard = false
const loggedInFromGoogle = false
const loggedInFromEmail = false

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in and allow to see and buy products");
} else {
    console.log("User not logged in.");
}
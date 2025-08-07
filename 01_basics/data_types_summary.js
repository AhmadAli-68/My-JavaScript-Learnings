// Primitive (7 data types)

// String, Number, Boolean, null, undefined, Symbol, BigInt(for scientific or large numbers)
//? -> Symbol : kisi bhi value ko unique bana sakte hai.
//? -> BigInt : large values ko store krne k liye. agr kisi bary number k agy 'n' likh dain to yeh BigInt ko represent kre ga,


// Non-Primitive -> Also known as reference types
//? Yeh sari values woh hain jo k memory me inka reference apko directly diya jata hai. 

//* Arrays, Objects, Functions

//! Arrays:

const heroes = ["spiderman", "Supernam", "ironman", 'thor'];

//! Objects:

let myObj = {
    name: "Ahmad",
    age: 22,
    gender: "male"
}

//! Functions:

const myfun = function () {
    console.log("Hello World");
}

console.log(typeof myfun); //? yeh bhi type function hai, but yeh object function hai.
console.log(typeof heroes);
console.log(typeof myObj);


//! ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//? Stack and Heap (Memory Allocation)

// Stack -> used by Primitive data types //* jb bhi stack memory use hoti hai, jo variable humne declare kiya hai, uski copy hume milti hai.

// Heap -> used by Non-Primitive data types //* jb bhi heap memory use hoti hai, jo variable humne declare kiya hai, uska reference hume milta hai. (means jo bhi change hoga, original value me bhi change hoga.)

let myName = "Ahmad";
let anotherName = myName;

anotherName = "Ali"

console.log(myName);
console.log(anotherName);

let UserOne = {
    email: "ahmad@gmail.com",
    name: "Ahmad",
}

let UserTwo = UserOne;

UserTwo.email = "ali@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);
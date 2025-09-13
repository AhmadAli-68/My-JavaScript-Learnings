const user = {
    username: "Ahmad",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Get user details from database.")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// So it is our object literal.

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this) //? will return empty {} because there is nothing in the global context.

// Classes and constructor functions

// this "new" keyword is the constructor function which allow to create new context or multiple instances from one object.

// new se aik empty object create hota hai jisko instance bola jata hai.

function User(username, loginCount, isLoggedIn) { // This is the constructor
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function() {
        console.log(`Welcome! ${this.username}`)
    }

    return this
}

const userOne = new User("Ahmad", 12, true)
const userTwo = new User("Ali", 8, false)
console.log(userOne.constructor)
// console.log(userTwo)
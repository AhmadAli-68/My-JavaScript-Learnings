const user = {
    username: "Ahmad",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Ali"
// user.welcomeMessage()

// console.log(this); // output = {} //? yeh empty object return kry ga, kyu k hum abhi node environment k andr hain... to is me koi global context ka hona zaruri hai

// *Useful Info: browser ka sb se zayada global object Window object hai.

// function chai() {
//     let username = "Sheraz"
//     console.log(this.username);
// }

// const chai = function () {
//     let username = "Sheraz"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Sheraz"
    console.log(username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //? It is explicit return, means curly braces k andr return likhna zaruri hai.
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) //? It is implicit return, means return keyword likhna zaruri nai

const addTwo = (num1, num2) => ({username: "Ahmad"})

console.log(addTwo(3, 5));
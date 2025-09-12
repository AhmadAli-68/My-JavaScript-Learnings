// fetch("https://something.com").then().catch().finally()

//? A promise is an "object" representing the eventual completion or failure of asynchronous operation

//* A new promise takes two things: A function and the reject and resolve parameters

// Different tasks we can perform with promises:

// Do an async task
// DB calls, connect etc
// Cryptography
// network

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is completed')
        resolve()
    }, 1000)
})

//! resolve() k begair .then wala part nai hoga, aur is resolve me hum values bhi pass kr skty hain.

promiseOne.then(function () {
    console.log("Promise Consumed.")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved.");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "Ahmad",
            email: "ahmad@gmail.com"
        })
    }, 1000)
})

promiseThree.then((user) => console.log(user))

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "Sheraz",
                password: "1234"
            })
        } else {
            reject("ERROR in promiseFour: Something went wrong!!")
        }
    }, 2000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log("FInally, the Promise is either resolved or rejected.")) // Yeh finally part to execute hota hi hota hai, chahy promise resolve ho ya reject.

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "Abdul Rehman",
                password: "1234"
            })
        } else {
            reject("Abdul Rehman went wrong!!")
        }
    }, 2000)
})

const consumePromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/AhmadAli-68')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))
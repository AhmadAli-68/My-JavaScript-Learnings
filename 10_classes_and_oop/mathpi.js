const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor)

// console.log(Math.PI)

const myObj = {
    name: "Ahmad",
    email: "ahmad@gmail.com",
    isAvailable: true,

    getAJob: function () {
        console.log("You got the job.")
    }
}

console.log(myObj)
console.log(Object.getOwnPropertyDescriptor(myObj, "name"))

Object.defineProperty(myObj, "name", {
    // writable: false,
    enumerable: true,
    // configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(myObj, "name"))

for (const [key, value] of Object.entries(myObj)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}
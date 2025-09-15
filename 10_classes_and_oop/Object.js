function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype) // --> yeh empty parenthesis return krta hai. kyu kuch default context set hoty hain, aur yeh by default function k context ka "this" hai.

function createUser(username, score) {
    this.username = username
    this.score = score
}

// yaha pr hum prototype ki madad se apne functions bhi create kr skty hain, like in the below 👇🏻: 

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`)
}

const user = new createUser("Ahmad", 25)
const user2 = new createUser("Sheraz", 250)

user.printMe()
user2.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
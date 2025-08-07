// Singleton -> means yeh apne trha k aik hi object bnta hai constructor k zariye.

// jb bhi hum object ko literals ki trha create krty hain to singleton nahi bnta hai.

//? Object Literals

// Object.create //* This is the constructor method. Issi hi singleton bnta hai.

const mySym = Symbol("key1")

const JSUser = {
    name: "Ahmad", //! Yeh jo name, age, email hai, behind the scenes, yeh string ki trha rakha ja rha.
    full_name: "Ahmad Ali",
    age: 20,
    [mySym]: "myKey1",
    location: "lahore",
    email: "ahmad@gmail.com",
    isLoggedIn: false,
}

JSUser.greetings = function () {
    console.log("Hello JS User!!");
}

JSUser.greetingsTwo = function () {
    console.log(`Hello JS User!! ${this.full_name}`);
}

// JSUser.email = "Ahmad123@gmail.com"

// Object.freeze(JSUser)

JSUser.name = "Sheraz"

console.log(JSUser.greetings());
console.log(JSUser.greetingsTwo());
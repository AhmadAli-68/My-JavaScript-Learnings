// let myName = "Ahmad      "
// let hobby = "code             "

// console.log(myName.length)
// console.log(myName.trim().length)

//? But we want the function that can tell us the exact length of the string even if there are extra spaces.

//* like console.log(myName.trueLength)

let myHeroes = ['thor', 'spiderMan', 'hawkeye']

let heroPower = {
    thor: "hammer",
    spiderMan: "web-shooters",
    hawkeye: "bow-and-arrow",

    getSpiderManPower: function(){
        console.log(`Spider-man power is ${this.spiderMan}`)
    }
}

Object.prototype.Ahmad = function() {
    console.log(`Ahmad is present in all objects[arrays, functions, strings]`)
}

Array.prototype.newAhmad = function() {
    console.log('newAhmad is here')
}

// heroPower.Ahmad()

// myHeroes.Ahmad()

// myHeroes.newAhmad() //? it is working and returning "newAhmad is present."

// heroPower.newAhmad() //? it will throw error: because newAhmad is not the prototype function of object "heroPower"

//* Inheritance

const user = {
    name: "Abdul Rehman",
    email: "abdul@google.com"
}

const Teacher = {
    createLecture: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignments",
    fullTime: true,
    __proto__: TeachingSupport // __proto__ it will access the other object.
}

Teacher.__proto__ = user

// yehi prototypal inheritance hai, an old way to access the other object's key properties.

//* Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "AhmadAli       "

String.prototype.trueLength = function() {
    console.log(`${this}`) // it will print "AhmadAli" because anotherUsername me reference hi "AhmadAli" ka tha.
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"Sheraz".trueLength()
"AbdulRehman".trueLength()
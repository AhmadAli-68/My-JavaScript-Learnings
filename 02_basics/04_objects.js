const tinderUser = new Object() //? yeh aik singleton object hai.

const tinderObject = {

} //? aur yeh non singleton

tinderObject.id = "123"
tinderObject.name = "Ahmad"
tinderObject.email = "ahmad123@gmail.com"
tinderObject.isLoggedIn = false

// console.log(tinderObject);

const regularUser = {
    email: "ahmad123@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Ahmad",
            lastName: "Ali"
        }
    }
}

// console.log(regularUser.fullName?.userFullname);

//? Merging of Objects ->

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b",
}

const obj3 = {
    5: "a",
    6: "b",
}

// const obj3 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3) //! isko km hi use kiya jata hai

//? const obj4 = Object.assign({}, obj1, obj2, obj3)
//* {} it is the target, and obj1, obj2, obj3 are sources.

const obj4 = { ...obj1, ...obj2 }

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "Ahmad123@gmail.com",
    },
    {
        id: 1,
        email: "Ahmad123@gmail.com",
    },
    {
        id: 1,
        email: "Ahmad123@gmail.com",
    },
    {
        id: 1,
        email: "Ahmad123@gmail.com",
    },
]

console.log(users[1].email)

console.log(tinderObject);

console.log(Object.keys(tinderObject)); //? --> return key values
console.log(Object.values(tinderObject)); //? --> return data values
console.log(Object.entries(tinderObject)); //? --> return each object instance as an array.

console.log(tinderObject.hasOwnProperty("isLogged")); //? --> return true or false if the object property exist.

const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "Mian Ahmad Basit"
}

// course.courseInstructor

const { courseName, courseInstructor: instructor, price } = course

console.log(instructor, price);
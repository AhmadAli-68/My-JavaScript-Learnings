// var c = 300 //? yeh hai global scope. global scope me hum jo bhi likhy gain... woh block scope me bhi available hoga. And var is a global keyword.

let a = 300

if (true) { //? if hai humara block scope, 
    let a = 10
    const b = 20
    // console.log("Inner a is: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Ahmad"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Ahmad"
    if (username === "Ahmad") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

//! ++++++++++++ Interesting ++++++++++++

console.log(addOne(5))

function addOne(num) {
    return num + 1
}


console.log(addTwo(5))

const addTwo = function(num) { //? yeh bhi aik function hi hai, but yeh aik expression wala function hai means humne isko aik variable me store kra diya hai.
    return num + 2
}

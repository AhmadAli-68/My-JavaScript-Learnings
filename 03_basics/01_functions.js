function sayMyName() {
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("D");
}

// sayMyName()
// sayMyName()
// sayMyName()

// function Sum(number1, number2) { //? --> Parameters
//     console.log(number1 + number2)
// }

function Sum(number1, number2) { //? --> Parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
}

// console.log(Sum(1, 4))
const result = Sum(1, 4) //? --> Arguments
// console.log("Result: ", result);

function loginUserMessage(username = "Ahmad") {
    if (!username) {
        console.log("Please enter your username.");
        return
    } else {
        return `${username} just logged in.`
    }
}

const loginUser = loginUserMessage("Ali"); //? if no value is given, it will return undefined not null.
console.log(loginUser);

function calculateCartPrice(...num) {
    return num
}

// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username: "Ahmad",
    price: 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
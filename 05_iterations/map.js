// map method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* const newNumbers = myNums.map((num) => { return num + 10 })

// const newNums_2 = []

// const numbers = myNums.forEach((num) => {
//     return newNums_2.push(num + 10)
// })

// console.log(newNums_2);

//! Chaining

const newNumbers = myNums
    .map((num) => num * 10)
    .map((num) => num - 2)
    .filter((num) => num >= 40)

console.log(newNumbers);
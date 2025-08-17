//* reduce

const numbers = [1,2,3]

// const reducedNumber = numbers.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 3)

//todo : Let's convert it into arrow function

const reducedNumber = numbers.reduce((acc, currVal) => acc + currVal, 0)

// console.log(reducedNumber);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "data science course",
        price: 6999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
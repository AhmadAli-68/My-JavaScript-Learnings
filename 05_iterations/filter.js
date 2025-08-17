// const coding = ["js", "ruby", "java", "cpp", "ts", "py"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

//? for each loop doesn't return anything. if we store the values in some variable or const container.

// console.log(values); //! will return undefined

//* filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numbers = myNums.filter((num) => { 
// //? always have to use return keyword whenever the function is written like this. otherwise it will not return anything.
//     return num > 4
// })

const numbers = myNums.filter((item) => item > 5)

//? Always return values unlike the for each

console.log(numbers);

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1996, edition: 2005 },
    { title: "Book Eight", genre: "Science", publish: 2003, edition: 2012 },
    { title: "Book Nine", genre: "Fiction", publish: 2011, edition: 2016 },
    { title: "Book Ten", genre: "Non-Fiction", publish: 1994, edition: 2009 }
];

const genreBooks = books.filter((book) => book.genre === "History")
// console.log(genreBooks)

const publishedBooks = books.filter((item) => {
    return item.publish >= 2000 && item.genre === "Fiction"
})
console.log(publishedBooks);
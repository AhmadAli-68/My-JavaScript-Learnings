// ******************** padStart Method ********************

const now = new Date();
const year = String(now.getFullYear()).slice(2);
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");

const randomNumber = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
const code = `${year}${month}${day}${randomNumber}`

// console.log(code);

//* Dates

let myDate = new Date();
// console.log(myDate); //? 2025-07-05T09:20:47.187Z
// console.log(myDate.toString()); //? Sat Jul 05 2025 14:20:47 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toDateString()); //? Sat Jul 05 2025
// console.log(myDate.toLocaleString()); //? 7/5/2025, 2:20:47 PM
// console.log(typeof myDate); //? Its type is object

// let myCreatedDate = new Date(2024, 6, 16)
// let myCreatedDate = new Date(2024, 6, 16, 4, 3)
// let myCreatedDate = new Date("2024-06-23")
let myCreatedDate = new Date("2024-06-23")
// console.log(myCreatedDate.toLocaleString()); //? 7/16/2024, 4:03:00 AM

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now() / 1000); //? 1751709168.642
// console.log(Math.floor(Date.now() / 1000)); //? 1751709243

let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth() + 1); //? Will give you exact month, but in JS, months index starts from 0

console.log(newDate.getDay()); //? Will give you a week day 1 for Monday to 7 for sunday

// newDate.toLocaleString("default", {
//     weekday: "long",
//     timeZone: "Pakistan"
// })

const originalDate = "05-07-2025";
const [newDay, newMonth, newYear] = originalDate.split("-");
const convertedDate = `${newMonth}-${newDay}-${newYear}`

// console.log(convertedDate);

function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days)
    return newDate;
}

const todayDate = new Date(); // get the current date

const days = 7;

const newdate = addDays(todayDate, days)

console.log("New Date:", newdate.toDateString());
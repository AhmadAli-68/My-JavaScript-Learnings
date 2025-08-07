const name = "Ahmad";
const repoCount = 31

// console.log(name + repoCount + " Value"); // not recommended in the modern javascript

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}!`); //? String Interpolation


const gameName = new String("Ahmad-Ali-com");
console.log(gameName[1]);

// console.log(gameName.__proto__); //? returns object

// console.log(typeof gameName);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

//? charAt
console.log(gameName.charAt(2));

//? indexOf
console.log(gameName.indexOf("o"));

//? substring
const newString = gameName.substring(0, 4);
console.log(newString);

//? slice
const anotherString = gameName.slice(-8, 3);
console.log(anotherString);

//? trim()
const newString2 = "     HelloWorld!     ";
console.log(newString2);
console.log(newString2.trim());

//? replace()
const url = "https://Ahmad.com/Ahmad%20Ali";
console.log(url.replace("%20", "-"))

console.log(url.includes("sheraz")); //? returns the true or false.

//? split()
console.log(gameName.split("-"));
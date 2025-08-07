const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const concatedArray = marvel_heroes.concat(dc_heroes)
// console.log(concatedArray);

//? concat alaways return a new array.

//! Spread Operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ahmad")); // it will return false because it is a string.

console.log(Array.from("Ahmad")); //? it will convert the string into an array

console.log(Array.from({ name: "Ahmad" })); // interesting case, it will return empty array because we will have to provide the actual values or key values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
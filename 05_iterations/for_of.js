//? for of loop

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//? Maps

const map = new Map() //* yeh aik apne ap me aik object hai.
map.set("PK", "Pakistan")
map.set("USA", "United States of America")
map.set("SAR", "Saudi Arabia")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value);
}

const myObject = {
    game1: "NFS",
    game: "Spider-man"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":", value);
// }


const myObject = {
    js: "javascript",
    py: "python",
    ts: "typescript"
}

for (const key in myObject) {
    // console.log(`${key} is for ${myObject[key]}`);
}

const programming = ["js", "py", "ts", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map() //* yeh aik apne ap me aik object hai.
// map.set("PK", "Pakistan")
// map.set("USA", "United States of America")
// map.set("SAR", "Saudi Arabia")

// for (const [key, value] in map) {
//     console.log(map[key], ":", map[value]);
// }

//! yeh Map() object iterable nai hai. so yeh for in loop is pr work nai kre ga.

//? objects k liye for in loop and arrays k liye for of loop.
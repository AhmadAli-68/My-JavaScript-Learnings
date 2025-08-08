//? for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("Hello Developer");
    }
    // console.log(element);
}

// console.log(element); //! will throw an error - because element is defined inside for loop and cannot be accessed outside the blocked scope 

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i * j}`);
    }
}

let myArray = ["flash", "superman", "batman", "ironman"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

//? keywords - break and continue

//* for loop with break

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        // console.log("5 is detected and loop is broken");
        break; //? this breaks the loop and stop further execution. 
    }
    // console.log(`Value of i is ${i}`);
}

//* for loop with continue

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("5 is detected! and loop continues");

        continue; //? this skips the condition for specific value and further continue the loop.
    }
    console.log(`value of i is ${i}`);
}
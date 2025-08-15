// for each loop

const coding = ["js", "ruby", "java", "cpp", "ts", "py"]

coding.forEach((value) => {
    // console.log(value);
})

function printMe (item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index,  arr);
})

const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
    {
        langName: "Typescript",
        langFileName: "ts"
    }
]

myCoding.forEach((item) => {
    console.log(item.langFileName);
})
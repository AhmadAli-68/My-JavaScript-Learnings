const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(e);
        console.log(e.target);
        if (e.target.id === "gray") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "wheat") {
            body.style.backgroundColor = e.target.id
            h1.style.color = "black"
            h2.style.color = "black"
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id
        }
    })
})
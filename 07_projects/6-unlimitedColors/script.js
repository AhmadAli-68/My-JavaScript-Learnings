// generate a random color

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let interval

const startChangingColor = () => {
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }

    if (!interval) {
        interval = setInterval(changeBgColor, 1000)
    }
}

const stopChangingColor = () => {
    clearInterval(interval)
    interval = null
}

start.addEventListener("click", startChangingColor)
stop.addEventListener("click", stopChangingColor)
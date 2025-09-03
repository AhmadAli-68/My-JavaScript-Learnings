const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const button = document.createElement("button")

let prevGuesses = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.")
    } else if (guess < 1) {
        alert("Please enter a number greater than 1")
    } else if (guess > 100) {
        alert("Please enter the less than or equal to 100.")
    } else {
        prevGuesses.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over and your random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed the right number")
        endGame()
        newGame()
    } else if (guess < randomNumber) {
        displayMessage("Number is too low.")
    } else if (guess > randomNumber) {
        displayMessage("Number is too high.")
    }
}

function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${10 - numGuess}`
    numGuess++;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute("disabled", "")
    button.classList.add('button')
    button.innerHTML = `<p id="newGame">Start New Game</p>`
    startOver.appendChild(button)
    // playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuesses = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(button)
        playGame = true
    })
}

// console.log(randomNumber);
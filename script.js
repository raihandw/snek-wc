let submitButton = document.getElementById("submit-button")
let hiddenText = document.getElementById("hidden-text")

let body = document.querySelector("body")
let firstPlace = document.getElementById("first-place")
let secondPlace = document.getElementById("second-place")
let thirdPlace = document.getElementById("third-place")

submitButton.onclick = (event) => {
    if (hiddenText.hidden) {
        hiddenText.hidden = false;
    } else {
        hiddenText.hidden = true;
    }
}

firstPlace.onclick = (event) => {
    body.style.backgroundColor = "gold"
}

secondPlace.onclick = (event) => {
    body.style.backgroundColor = "silver"
}

thirdPlace.onclick = (event) => {
    body.style.backgroundColor = "rgb(205, 127, 50)"
}
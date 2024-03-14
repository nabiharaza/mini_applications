const diceCount = document.getElementById("diceCount");
const rollBtn = document.getElementById("rollBtn");
const resultRollDice = document.getElementById("resultRollDice");
const diceImages = document.getElementById("diceImages");

function rollDice() {
    let images = []
    let values = []
    let tempNumber
    for (let i = 0; i < diceCount.value; i++) {
        tempNumber = ((Math.random() * (6 - 1) + 1).toFixed(0));
        images.push(`<img src="icons/${tempNumber}.svg" alt="dice-${tempNumber}">`)
        values.push(Number(tempNumber))
        diceImages.innerHTML = images.join('')
        resultRollDice.innerHTML = values.join(' ')
    }
}

function reset() {
    diceCount.value = 1
    resultRollDice.textContent = ""
    diceImages.innerHTML = ""
} //reset the page
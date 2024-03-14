const inputBar = document.getElementById('inputBar')
const celsiusBtn = document.getElementById('celsiusBtn')
const farenheitBtn = document.getElementById('farenheitBtn')
const KelvinBtn = document.getElementById('KelvinBtn')
const submitBtn = document.getElementById('submitBtn')
const resultOutput = document.getElementById('resultOutput')

function convert(){
    let temp = inputBar.value
    if (celsiusBtn.checked) {
        temp = ((parseFloat(temp) * 9 / 5) + 32)
        console.log(resultOutput)
        resultOutput.textContent = temp.toFixed(1) + " °F"
    } else if (farenheitBtn.checked) {
        temp = ((parseFloat(temp) - 32) * 5 / 9)
         console.log(resultOutput)
        resultOutput.textContent = temp.toFixed(1) + " °C"
    }
}
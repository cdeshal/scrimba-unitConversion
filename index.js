/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

round floating pt # upto 3 decimal places
*/

const inputText = document.querySelector("input")
const conversionBtn = document.querySelector("button")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
let input = null

inputText.addEventListener("input", function() {
    this.style.width = this.value.length + "ch";
})

conversionBtn.addEventListener("click", function() {
    input = Number(inputText.value)
    // length output
    lengthP.innerText = `${input} meters = ${(3.281*input).toFixed(3)} feet | ${input} feet = ${(input/3.281).toFixed(3)} meters`
    // volume output
    volumeP.innerText = `${input} liters = ${(0.264*input).toFixed(3)} gallons | ${input} gallons = ${(input/0.264).toFixed(3)} liters`
    // mass output
    massP.innerText = `${input} kilos = ${(2.204*input).toFixed(3)} pounds | ${input} pounds = ${(input/2.204).toFixed(3)} kilos`
})
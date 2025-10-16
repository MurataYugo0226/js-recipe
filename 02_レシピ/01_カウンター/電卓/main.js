const inputText = document.getElementById("input-text")
const inputText1 = document.getElementById("input-text1")
const button = document.getElementById("button")
const display = document.getElementById("display")
let plus = function () {
  return Number(inputText.value) + Number(inputText1.value)
}
button.onclick = function () {
  display.textContent = plus()
}

let input = inputText.value

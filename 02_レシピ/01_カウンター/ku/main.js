const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const display1 = document.getElementById("display1")
const plusButton1 = document.getElementById("plus-button1")

let count = 1
let count1 = 0

plusButton.onclick = function () {
  count *= 2
  display.textContent = count
}

plusButton1.onclick = function () {
  count1 -= 1
  display1.textContent = count1
}

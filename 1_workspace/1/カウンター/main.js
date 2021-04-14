const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0

plusButton.onclick = function() {
  count += 1
  display.textContent = count
}

// 発展★
const minusbutton = document.getElementById("minus-button")
const twoTimesButton = document.getElementById("two-times-button")

minusbutton.onclick = function() {
  count -= 1
  display.textContent = count
}

twoTimesButton.onclick = function() {
  count *= 2
  display.textContent = count
}

// 発展★★★
// 後で

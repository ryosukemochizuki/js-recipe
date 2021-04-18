const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")

const display = document.getElementById("display")

button1.onclick = function() {
  display.textContent = "残念"
}
button2.onclick = function() {
  display.textContent = "残念"
}
button3.onclick = function() {
  display.textContent = "正解"
}

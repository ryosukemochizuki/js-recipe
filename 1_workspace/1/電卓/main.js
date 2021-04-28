// 要素の取得
const inputNumber = document.getElementById("input-number")
const numbers = document.querySelectorAll(".num")
const maths = document.querySelectorAll(".math")
const equal = document.getElementById("equal")

let secondNum = ""
numbers.forEach((number) => {
  number.onclick = function() {
    inputNumber.value += Number(number.textContent)
    // console.log(inputNumber.value)
    secondNum = Number(inputNumber.value)
    console.log(secondNum)
  }
})

let firstNum = ""
let kigou = ""
maths.forEach((math) => {
  math.onclick = function() {
    // inputNumber.value += math.textContent
    // console.log(inputNumber.value)
    kigou = math.textContent
    firstNum = secondNum
    secondNum = ""
    inputNumber.value = ""
    // console.log(kigou)
    // console.log(firstNum)
    // console.log(secondNum)
  }
})

equal.onclick = function() {
  if (kigou === "/") {
    inputNumber.value = firstNum / secondNum
  } else if (kigou === "*") {
    inputNumber.value = firstNum * secondNum
  } else if (kigou === "-") {
    inputNumber.value = firstNum - secondNum
  } else if (kigou === "+") {
    inputNumber.value = firstNum + secondNum
  } else {
    inputNumber.value = 0
  }
}

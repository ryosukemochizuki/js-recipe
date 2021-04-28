// 要素の取得
const inputNumber = document.getElementById("input-number")
const numbers = document.querySelectorAll(".num")
const maths = document.querySelectorAll(".math")
const equal = document.getElementById("equal")

// 数字と記号保存初期値
let firstNum = 0
let secondNum = 0
let kigou = ""

// 数字一つずつにハンドラ登録
numbers.forEach((number) => {
  number.onclick = function() {
    inputNumber.value += Number(number.textContent)
    secondNum = Number(inputNumber.value) //最初に押した数字は2番目に入るため
    console.log("secondNum", secondNum)
  }
})

// 演算子一つずつにハンドラ登録
maths.forEach((math) => {
  math.onclick = function() {
    kigou = math.textContent
    inputNumber.value = ""
    firstNum = secondNum
    secondNum = 0
    console.log("kigou", kigou)
    console.log("firstNum", firstNum)
    console.log("secondNum", secondNum)
  }
})

// イコールを押した時
equal.onclick = function() {
  if (kigou === "/") {
    inputNumber.value = firstNum / secondNum
    secondNum = Number(inputNumber.value)
  } else if (kigou === "*") {
    inputNumber.value = firstNum * secondNum
    secondNum = Number(inputNumber.value)
  } else if (kigou === "-") {
    inputNumber.value = firstNum - secondNum
    secondNum = Number(inputNumber.value)
  } else if (kigou === "+") {
    inputNumber.value = firstNum + secondNum
    secondNum = Number(inputNumber.value)
    console.log("secondNum", secondNum)
  } else {
    inputNumber.value = 0
    secondNum = Number(inputNumber.value)
  }
}

// const display = document.getElementById("display")
// const plusButton = document.getElementById("plus-button")
// let count = 0

// plusButton.onclick = function() {
//   count += 1
//   display.textContent = count
// }

// // 発展★
// const minusbutton = document.getElementById("minus-button")
// const twoTimesButton = document.getElementById("two-times-button")

// minusbutton.onclick = function() {
//   count -= 1
//   display.textContent = count
// }

// twoTimesButton.onclick = function() {
//   count *= 2
//   display.textContent = count
// }

// 発展★★★
// 要素取得
// 入力
const input = document.getElementById("input")
// 数字
const numbers = document.querySelectorAll(".num")
// 演算子
const devide = document.getElementById("devide")
const times = document.getElementById("times")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const math = [devide, times, minus, plus]
// イコール
const sum = document.getElementById("sum")
// クリア
const clear = document.getElementById("clear")

// 初期値
let result = 0 // 一番目の数字(現状の答え)
let inputNum = 0 // 2番目の数字
let kigou = "" // 演算子格納用の変数
let mode = "input" // "input" or "result" モードで

// 数字を押したらinput.valueに反映される
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function() {
    if (mode === "input") {
      // 既存の数字に付け足す。
      input.value += numbers[i].textContent
      inputNum = Number(input.value)
      console.log("inputNum", inputNum)
    } else if (mode === "result") {
      // result => 入っていたものを消して新しく入れる。
      input.value = ""
      input.value += numbers[i].textContent
      inputNum = Number(input.value)
      mode = "input" //１桁目以降は、連なっていくから
    }
  }
}

// 演算子毎に計算をする処理(計算後次に入力する値は初期値に戻っていなければいけない)
const calc = function() {
  if (kigou === "×") {
    if (result !== 0) {
      // 最初の時はresultがゼロなので
      result *= inputNum // input.valueの値に２番目のinputNumをかける
    } else {
      result = inputNum
    }
    input.value = result // 計算結果を目に見える形で表示する
    inputNum = 0 //次また数字を入力できるように２番目の値は0にしておく
    console.log("result", result)
    console.log("inputNum", inputNum)
  } else if (kigou === "÷") {
    if (result !== 0) {
      result /= inputNum
    } else {
      result = inputNum
    }
    input.value = result
    inputNum = 0
    console.log("result", result)
    console.log("inputNum", inputNum)
  } else if (kigou === "-") {
    result -= inputNum
    input.value = result
    inputNum = 0
    console.log("result", result)
    console.log("inputNum", inputNum)
  } else if (kigou === "+") {
    result += inputNum
    input.value = result
    inputNum = 0
    console.log("result", result)
    console.log("inputNum", inputNum)
  }

  mode = "result" // 一番最初の入力の例外だけ除く
}

// 演算子を押したらkigouにクリックしたテキストを代入して、計算も走らせる
for (let m = 0; m < math.length; m++) {
  math[m].onclick = function() {
    kigou = math[m].textContent
    calc()
  }
}

// ＝を押した時に計算する
sum.onclick = calc

// sum.onclick = calc // function () {...} ( calc()の関数自体 )
// sum.onclick = calc() // null ( calc() の実行結果 )

clear.onclick = function() {
  input.value = ""
  result = 0
  inputNum = 0
}

// 実現したい挙動
// 数字を入力→演算子を押す→勝手に計算されてinputに表示→次の数字を入力すると裏で結果を保持しながら新しい数字を入力できる
// // // // // // ↑に戻る

// 見つけたバグ
// 演算子を2回重複すると０になる
// 時々マイナスが負のマイナスとして取られる

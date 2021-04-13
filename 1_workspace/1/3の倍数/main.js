// // 1

// const number = 24
// if (number % 3 === 0) {
//   console.log(number + "!!!!!!!")
// } else {
//   console.log(number)
// }

// // 2

// const number = 24
// for (let n = 1; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log(n + "!!!!!!!")
//   } else {
//     console.log(n)
//   }
// }

// // 3

// const genkiFunction = function(number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 === 0) {
//       console.log(n + "!!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }

// genkiFunction(24)
// genkiFunction(100)

// // 発展★

// const fizzBuzz = function(number) {
//   for (let n = 1; n <= number; n++) {
//     // 3, 5の公約数
//     if (n % 15 === 0) {
//       console.log("FizzBuzz")
//     } else if (n % 5 === 0) {
//       console.log("Buzz")
//     } else if (n % 3 === 0) {
//       console.log("Fizz")
//     } else {
//       console.log(n)
//     }
//   }
// }

// fizzBuzz(24)
// fizzBuzz(100)

// // 発展★★

// const includeThree = function(number) {
//   for (let n = 1; n < number; n++) {
//     // 文字列に変換→含まれているか
//     if (n.toString().includes("3")) {
//       console.log(n + "!!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }

// includeThree(40)

// 発展★★★
// setIntervalを使う, setInterval(___, 1000)
// 数字を足して確認する動作を１秒ごとにする

// 初期値
let number = 0
// 数字を足して確認
const plusOne = function(n) {
  // setIntervalを途中で止めるためのreturn
  return function() {
    if (number < n) {
      number++
      if (number % 3 === 0) {
        console.log(number + "!!!!!!!")
      } else {
        console.log(number)
      }
    }
  }
}

// // return function() {}をコメントアウトして確認
// plusOne(3)
// plusOne(3)
// plusOne(3)

// plusOneをnumまで１秒ごとに繰り返す
const countInterval = function(num) {
  setInterval(plusOne(num), 1000)
}

countInterval(10)

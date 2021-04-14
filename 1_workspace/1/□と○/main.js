// 取得
const figure = document.getElementById("figure")
// const circleButton = document.getElementById("circle-button")
// const squareButton = document.getElementById("square-button")

console.dir(figure) // ノードの中に配列っぽいclassListがある

// circleButton.onclick = function() {
//   // figure に rounded クラスを追加する => 丸くなる
//   figure.classList.add("rounded")
// }

// squareButton.onclick = function() {
//   // figure から rounded クラスを削除する => 四角くなる
//   figure.classList.remove("rounded")
// }

figure.onclick = function() {
  figure.classList.toggle("rounded")
}

// 発展★
// 取得
const figureTwo = document.getElementById("figure2")

// マウスを乗せたとき
figureTwo.onmouseover = function() {
  figureTwo.classList.toggle("rounded")
}
// マウスを外したとき
figureTwo.onmouseout = function() {
  figureTwo.classList.toggle("rounded")
}

// 発展★★
// 取得
const figureThree = document.getElementById("figure3")

// クリックした時
figureThree.onclick = function() {
  if (figureThree.classList.contains("square")) {
    // squareクラスを含んでたら
    figureThree.className = "rounded transition"
  } else if (figureThree.classList.contains("rounded")) {
    // roundedクラスを含んでたら
    figureThree.className = "triangle transition"
  } else {
    // その他は四角に戻す
    figureThree.className = "square transition"
  }
}

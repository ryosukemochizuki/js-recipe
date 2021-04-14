// 要素を取得
const display = document.getElementById("display")
const button = document.getElementById("button")

// 初期値
let count = 0

// カウントを上げて数える関数
const countUp = function() {
  // count += 1 // countの更新
  // console.log(count)
  // display.textContent = count / 100 // countを1/100秒単位にして表示する

  // なぞのズレ
  count += 0.01
  display.textContent = count
}

// 裏側のタイマーがあるかないかの識別子 初期値なし
let id = null

button.onclick = function() {
  if (id === null) {
    // nullだったらタイマー始める
    id = setInterval(countUp, 10) // カウントを上げて数える関数をで行う
    button.textContent = "stop" // と同時にstopに変える
  } else {
    // nullじゃなかったら（setIntervalが裏側で動いていたら）
    clearInterval(id) // 動いているのを解除する
    id = null // count自体は残っているけど、うごいてないからnullにする
    button.textContent = "start"
  }
}

// 発展★★
// countUp関数でcount/100を表示する前に+1する時間があるから？

// 発展★★★
// memo

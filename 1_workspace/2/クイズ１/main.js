const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// // クリックの処理と選択肢の内容が混ざっている
// choice1.onclick = function() {
//   feedback.textContent =
//     "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// }
// choice2.onclick = function() {
//   feedback.textContent =
//     "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// }
// choice3.onclick = function() {
//   feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// }

// 発展★_これで１問分(まとめると他のところを数字で処理できるから変更が容易)
const quiz = {
  text: "この肉は何でしょう？",
  image: "basashi.jpeg",
  choices: [
    {
      text: "豚肉",
      feedback:
        "残念！豚肉は、淡紅色で肉質が柔らかく、脂肪が肉と層状になっているよ！",
    },
    {
      text: "馬肉",
      feedback:
        "正解！馬肉は、低 カロリー 、低 脂肪 、低 コレステロール 、低 飽和脂肪酸 、高 タンパク質 だよ！",
    },
    {
      text: "牛肉",
      feedback: "残念！牛肉は、牛の肉だよ！",
    },
    {
      text: "羊肉",
      feedback: "残念！ジンギスカンだよ！",
    },
    {
      text: "鶏肉",
      feedback: "残念！違う！",
    },
  ],
}

// クイズを表示する関数
const reloadQuiz = function() {
  quizText.textContent = "Q." + quiz.text

  quizImage.src = "./images/" + quiz.image

  // 発展★★_choicesの長さ分だけボタンを作る_クイズ要素をJSにまとめるため
  for (let i = 0; i < quiz.choices.length; i++) {
    const choice = document.createElement("button")
    choice.textContent = quiz.choices[i].text
    // console.log(choice)
    choicesContainer.append(choice)
    // i番目のchoiceのクリック登録
    choiceClick(choice, i)
  }
}

// feedbackを返す関数
const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// クリックイベントの処理だけ
const choiceClick = function(choice, choiceNum) {
  choice.onclick = function() {
    choose(choiceNum)
  }
}

reloadQuiz()

// 選択肢に数字を使うといろんな処理に変換できる
// 複数の問いを作る→quizオブジェクトを配列にして、次の問題をクリックしたら配列の番目を+1する？

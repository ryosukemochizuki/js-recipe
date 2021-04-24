// 要素の取得
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const quizTitle = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const nextButton = document.getElementById("next-quiz")

// quizの内容(htmlに書いてあった内容も全て管理)
const quiz = [
  {
    title: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        word: "ガニメデ",
        feedback: "正解！",
      },
      {
        word: "ゼニガメ",
        feedback: "残念！",
      },
      {
        word: "ウガンダ",
        feedback: "残念！",
      },
    ],
  },
  {
    title: "この星の名前は何でしょう？",
    image: "maruoka.png",
    choices: [
      {
        word: "まるおか",
        feedback: "正解！",
      },
      {
        word: "おかまる",
        feedback: "残念！",
      },
      {
        word: "おるかま",
        feedback: "残念！",
      },
    ],
  },
]

// クイズを表示するための関数
const reloadQuiz = function(nowNumber) {
  quizTitle.textContent = quiz[nowNumber].title
  quizImage.src = "./images/" + quiz[nowNumber].image
  choice1.textContent = quiz[nowNumber].choices[0].word
  choice2.textContent = quiz[nowNumber].choices[1].word
  choice3.textContent = quiz[nowNumber].choices[2].word
}

// feedbackを表示するための関数
const answer = function(choiceNumber) {
  feedback.textContent = quiz[nowNumber].choices[choiceNumber].feedback
}

// クリックの処理
choice1.onclick = function() {
  answer(0)
  plusOne()
}
choice2.onclick = function() {
  answer(1)
  plusOne()
}
choice3.onclick = function() {
  answer(2)
  plusOne()
}

// 正解数
let correct = 0
const plusOne = function() {
  if (feedback.textContent === "正解！") {
    correct += 1
  }
}

// 最初の読み込み
reloadQuiz(0)

// 次の問題へを押した時
nextButton.onclick = function() {
  if (quiz[nowNumber + 1]) {
    nextQuiz()
  } else {
    alert(`finish! ${correct} / ${quiz.length}`)
    location.reload()
  }
}

// 次の問題への関数
let nowNumber = 0
const nextQuiz = function() {
  nowNumber += 1
  reloadQuiz(nowNumber)
  feedback.textContent = ""
}

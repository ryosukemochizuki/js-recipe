// 一番最初だけのやつ
// 要素を取得する
// const inputElement = document.getElementById("input-todo")
// const addButton = document.getElementById("add-button")
// const container = document.getElementById("cards-container")

// // カードを追加する
// // 追加ボタンを押したら
// addButton.onclick = function() {
//   addCard()
// }

// // 発展★
// document.onkeydown = function(e) {
//   if (e.key === "Enter") {
//     addCard()
//   }
// }

// // カードを作る関数
// const createCard = function(text) {
//   // const text = inputElement.value // input要素のvalueを保存←引数に行った

//   // コンテナに入れるためのカード要素を作る
//   const card = document.createElement("div")
//   card.className = "card"

//   // cardの中のtodo要素を作る
//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text

//   card.append(todo) // cardの中にtodoをつける

//   // cardの中にdelete要素を作る
//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete"

//   deleteButton.onclick = function() {
//     card.remove()
//   }

//   card.append(deleteButton) // cardの中にdeleteButtonをつける

//   return card // 処理を返すのではなく、完成したものを返す
// }

// // カードを追加する関数
// const addCard = function() {
//   const card = createCard(inputElement.value)
//   container.append(card) // できたカードをcontainerにつける
//   inputElement.value = "" // 値は空に戻す
// }

// 発展★★
const inputElements = document.querySelectorAll(".input-todo")
const addButtons = document.querySelectorAll(".input-button")
const containers = document.querySelectorAll(".cards-container")

for (let i = 0; i < containers.length; i++) {
  console.log()
  // カードを追加する
  // 追加ボタンを押したら
  addButtons[i].onclick = function() {
    addCard()
  }

  // 発展★
  document.onkeydown = function(e) {
    if (inputElements[i].value) {
      if (e.key === "Enter") {
        addCard()
      }
    }
  }

  // カードを作る関数
  const createCard = function(text) {
    // const text = inputElement.value // input要素のvalueを保存←引数に行った

    // コンテナに入れるためのカード要素を作る
    const card = document.createElement("div")
    card.className = "card"

    // cardの中のtodo要素を作る
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    card.append(todo) // cardの中にtodoをつける

    // cardの中にdelete要素を作る
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    deleteButton.onclick = function() {
      card.remove()
    }

    card.append(deleteButton) // cardの中にdeleteButtonをつける

    return card // 処理を返すのではなく、完成したものを返す
  }

  // カードを追加する関数
  const addCard = function() {
    const card = createCard(inputElements[i].value)
    containers[i].append(card) // できたカードをcontainerにつける
    inputElements[i].value = "" // 値は空に戻す
  }
}

// リストの追加
const addListButton = document.getElementById("add-list-button")
const addListContainer = document.getElementById("add-list-container")

// ボタンを押したら同じ構造のリストを作ってcontainerにappendするを書く

// 残り
// Enterを押した時に、最後のlistしか反応しない修正
// listを追加する

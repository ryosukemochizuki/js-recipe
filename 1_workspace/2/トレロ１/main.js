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

//   // deleteButtonのイベントを登録
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
let containers = [...document.querySelectorAll(".cards-container")]
let inputElements = [...document.querySelectorAll(".input-todo")]
let addButtons = [...document.querySelectorAll(".input-button")]
console.dir(containers[0])

for (let i = 0; i < containers.length; i++) {
  // カードを追加する
  addButtons[i].onclick = function() {
    if (inputElements[i].value) {
      addCard()
    }
  }
  inputElements[i].onkeydown = function(e) {
    // console.log(e)
    if (inputElements[i].value && e.key === "Enter") {
      addCard()
    }
  }

  // カードを作る関数
  const createCard = function(text) {
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

    // deleteButtonのイベントを登録
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
addListButton.onclick = function() {
  const listContainer = document.createElement("div")
  listContainer.className = "list-container"

  const listHeader = document.createElement("div")
  listHeader.className = "list-header"
  listHeader.textContent = "todo"
  listContainer.append(listHeader)

  const cardsContainer = document.createElement("div")
  cardsContainer.className = "cards-container"
  listContainer.append(cardsContainer)

  const listFooter = document.createElement("div")
  listFooter.className = "list-footer"
  listContainer.append(listFooter)

  const inputContainer = document.createElement("div")
  inputContainer.className = "input-container"
  listFooter.append(inputContainer)

  const inputTodo = document.createElement("input")
  inputTodo.type = "text"
  inputTodo.className = "input-todo"
  inputContainer.append(inputTodo)

  const inputButton = document.createElement("div")
  inputButton.className = "input-button"
  inputButton.textContent = "追加"
  inputContainer.append(inputButton)

  addListContainer.append(listContainer)
}

// querySelectorAllは配列ではないので、配列各種のメソッドは使えない
// Array.from()
// or
// スプレッド構文？

// リストの追加できる
// 追加したリストのcardの追加ができない。
// 多分queryselectorallで受け取ったnodelistが増えてないためfor文が回らない

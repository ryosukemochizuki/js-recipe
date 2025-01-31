// テキスト写し(リスト１つ)
// // 要素を取得する
// const inputElement = document.getElementById("input-todo")
// const addButton = document.getElementById("add-button")
// const container = document.getElementById("cards-container")

// // カードを作る関数
// const createCard = function(text) {
//   const text = inputElement.value // input要素のvalueを保存←引数に行った

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
//   card.append(deleteButton) // cardの中にdeleteButtonをつける

//   // deleteButtonのイベントを登録
//   deleteButton.onclick = function() {
//     card.remove()
//   }

//   return card // 処理を返すのではなく、完成したものを返す
// }

// // カードを追加する関数
// const addCard = function() {
//   const card = createCard(inputElement.value)
//   container.append(card) // できたカードをcontainerにつける
//   inputElement.value = "" // 値は空に戻す
// }

// // カードを追加する
// // 追加ボタンを押したら
// addButton.onclick = function() {
//   addCard()
// }

// 発展★と★★
// 要素の取得
const addListContainer = document.getElementById("add-list-container")
const addListButton = document.getElementById("add-list-button")

// リストを作ってcontainerにappendする関数(listの中の一覧の動作も含む)
const newContainer = function(title) {
  const listContainer = document.createElement("div")
  listContainer.className = "list-container"

  const listHeader = document.createElement("div")
  listHeader.className = "list-header"
  listHeader.textContent = title
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

  // カードを追加する関数
  const addCard = function() {
    const card = createCard(inputTodo.value)
    cardsContainer.append(card) // できたカードをcontainerにつける
    inputTodo.value = "" // 値は空に戻す
  }

  // 追加ボタンを押したらカードを追加する
  inputButton.onclick = function() {
    if (inputTodo.value) {
      addCard()
    }
  }

  // 発展★_enterを押したらカードを追加する
  inputTodo.onkeydown = function(e) {
    if (inputTodo.value && e.key === "Enter") {
      addCard()
    }
  }

  // 出来上がったリストをDOMに追加する
  addListContainer.append(listContainer)
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

// もともとあったtodo分の作れるように配列で管理→for文でリスト作成
let titles = ["GeekSalon", "勉強", "家事"]
for (let i = 0; i < titles.length; i++) {
  newContainer(titles[i])
}

// リスト追加ボタンで新しいリストを追加
addListButton.onclick = function() {
  newContainer("やることリスト")
}

// 最初の３つと追加のリストの処理を分けていた
// 同じことをするのに、処理が分かれていると見にくいし、同じ処理を複数書くことに繋がる
// ほぼ同じものを複数作る場合は、逆に違うところを配列で保存して引数とかで代入する構図にする
// 既存のものに付け足していくだけではない
// 新しい要素を作ってイベントハンドラを登録する時は、作る過程の関数内で定義する

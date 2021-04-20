// 要素を取得する
const inputElement = document.getElementById("input-todo")
const addButton = document.getElementById("add-button")
const container = document.getElementById("cards-container")

// カードを追加する
// 追加ボタンを押したら
addButton.onclick = function() {
  const card = createCard(inputElement.value)
  container.append(card) // できたカードをcontainerにつける
  inputElement.value = "" // 値は空に戻す
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

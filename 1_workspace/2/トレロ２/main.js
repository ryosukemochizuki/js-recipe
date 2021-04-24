// 要素の取得
const cardsContainer = document.getElementById("cards-container")
const inputTodo = document.getElementById("input-todo")
const addButton = document.getElementById("add-button")

// 追加ボタンをクリック
addButton.onclick = function() {
  if (inputTodo.value !== "") {
    const card = makeCard(inputTodo.value)
    cardsContainer.append(card)
    inputTodo.value = ""
  }
}

inputTodo.onkeydown = function(e) {
  if (inputTodo.value !== "" && e.key === "Enter") {
    const card = makeCard(inputTodo.value)
    cardsContainer.append(card)
    inputTodo.value = ""
  }
}

// cardを作成する関数
const makeCard = function(todo) {
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = todo
  // console.log(card)

  const content = document.createElement("div")
  content.className = "todo"

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  // 今作ったcardの削除ボタンにイベントハンドラを登録
  deleteButton.onclick = function() {
    card.remove()
  }
  // console.log(deleteButton)
  card.append(deleteButton)

  return card
}

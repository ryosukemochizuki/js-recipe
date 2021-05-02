// 要素取得
const itemsContainer = document.getElementById("items-container")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const myMoneyDisplay = document.getElementById("my-money")
const amountMoneyDisplay = document.getElementById("amount-money")
const addMyMoneyButton = document.getElementById("add-my-money")
const addAmountMoneyButton = document.getElementById("add-amount-money")
const returnMoney = document.getElementById("return-money")
const beerButton = document.getElementById("beer-button")

// 初期値
let myMoney = 0
let amountMoney = 0

// ボタンが押せるかチェックする関数
const checkAmountMoney = function() {
  if (amountMoney < 100) {
    teaButton.disabled = true
    cokeButton.disabled = true
    beerButton.disabled = true
  } else if (amountMoney < 130) {
    teaButton.disabled = false
    cokeButton.disabled = true
    beerButton.disabled = true
  } else if (amountMoney < 150) {
    teaButton.disabled = false
    cokeButton.disabled = false
    beerButton.disabled = true
  } else {
    teaButton.disabled = false
    cokeButton.disabled = false
    beerButton.disabled = false
  }
}

// 色を変える
const changeColor = function() {
  if (myMoney <= 500) {
    myMoneyDisplay.className = "vending-machine__display__money--danger"
  } else if (myMoney <= 1000) {
    myMoneyDisplay.className = "vending-machine__display__money--warn"
  } else {
    myMoneyDisplay.className = "vending-machine__display__money"
  }
}

// バイトで増える
addMyMoneyButton.onclick = function() {
  myMoney += 1000
  myMoneyDisplay.textContent = myMoney
  changeColor()
}

// 硬貨を入れる
addAmountMoneyButton.onclick = function() {
  if (myMoney >= 100) {
    myMoney -= 100
    myMoneyDisplay.textContent = myMoney
    amountMoney += 100
    amountMoneyDisplay.textContent = amountMoney
  }
  checkAmountMoney()
  changeColor()
}

// 写真を返す
const createImage = (drink) => {
  let drinkImgSrc = ""
  // switch (drink) {
  //   case "tea":
  //     drinkImgSrc =
  //       "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
  //     break
  //   case "coke":
  //     drinkImgSrc =
  //       "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
  //     break
  //   default:
  //     drinkImgSrc =
  //       "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  // }
  if (drink === "tea") {
    drinkImgSrc =
      "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
  } else if (drink === "coke") {
    drinkImgSrc =
      "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
  } else if (drink === "beer") {
    drinkImgSrc =
      "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg"
  } else {
    drinkImgSrc =
      "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

// それぞれのボタンを押す
teaButton.onclick = () => {
  if (amountMoney >= 100) {
    amountMoney -= 100
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("tea")
    itemsContainer.append(image)
  }
  checkAmountMoney()
}

cokeButton.onclick = () => {
  if (amountMoney >= 130) {
    amountMoney -= 130
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("coke")
    itemsContainer.append(image)
  }
  checkAmountMoney()
}

beerButton.onclick = () => {
  if (amountMoney >= 150) {
    amountMoney -= 150
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("beer")
    itemsContainer.append(image)
  }
  checkAmountMoney()
}

// お釣り
returnMoney.onclick = function() {
  myMoney += amountMoney
  amountMoney = 0
  amountMoneyDisplay.textContent = amountMoney
  myMoneyDisplay.textContent = myMoney
  checkAmountMoney()
}

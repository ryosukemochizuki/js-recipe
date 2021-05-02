const itemsContainer = document.getElementById("items-container")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")

const myMoneyDisplay = document.getElementById("my-money")
const amountMoneyDisplay = document.getElementById("amount-money")
const addMyMoneyButton = document.getElementById("add-my-money")
const addAmountMoneyButton = document.getElementById("add-amount-money")

let myMoney = 0
let amountMoney = 0

addMyMoneyButton.onclick = function() {
  myMoney += 1000
  myMoneyDisplay.textContent = myMoney
}
addAmountMoneyButton.onclick = function() {
  if (myMoney >= 100) {
    myMoney -= 100
    myMoneyDisplay.textContent = myMoney
    amountMoney += 100
    amountMoneyDisplay.textContent = amountMoney
  }
}
const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    default:
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

teaButton.onclick = () => {
  if (amountMoney >= 100) {
    amountMoney -= 100
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("tea")
    itemsContainer.append(image)
  }
}
cokeButton.onclick = () => {
  if (amountMoney >= 130) {
    amountMoney -= 130
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("coke")
    itemsContainer.append(image)
  }
}

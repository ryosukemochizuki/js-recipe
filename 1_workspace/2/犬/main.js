// const dogImageElement = document.getElementById("dog-image")
// const catImageElement = document.getElementById("cat-image")

// // 指定したサーバーにデータを取りに行く
// fetch("https://dog.ceo/api/breeds/image/random")
//   // fetch がおわったら１つめの then の中の関数を実行し、
//   .then((res) => {
//     // console.dir(res)
//     //ここの引数に入るのは、fetchから受け取ったもの(名前は便宜上res)
//     return res.json() // 結果を json として読み込む
//   })
//   // １つめが終わったら２つめの then の中の関数を実行します。
//   .then((data) => {
//     // console.dir(data)
//     //ここの引数に入るのは、上のjsonデータ(名前は便宜上data)
//     dogImageElement.src = data.message // 画像を表示する
//   })

// // 発展★
// fetch("https://api.thecatapi.com/v1/images/search")
//   .then((res) => {
//     // console.log(res)
//     return res.json()
//   })
//   .then((data) => {
//     // console.log(data)
//     catImageElement.src = data[0].url
//   })

// // クリックの処理
// loadButton.onclick = () => {
//   update()
// }

// // リロードする関数
// const update = () => {
//   location.reload()
// }

// 発展★★
// プルダウンメニューlist選択で一枚の写真が選ばれるようにする
// ↓
// 数字のプロダウンメニュー選択で数字分要素を作ってsrcに代入できる
// const title = document.getElementById("title")
const breeds = document.getElementById("breeds")
const loadButton = document.getElementById("load-button")
const imagesContainer = document.getElementById("images-container")

// 犬種のデータを取る
fetch("https://dog.ceo/api/breeds/list")
  .then((res) => {
    // console.dir(res)
    return res.json()
  })
  .then((data) => {
    // console.dir(data)
    for (let i = 0; i < data.message.length; i++) {
      makeDogOption(data, i)
    }
  })

// 犬種のオプションを作る関数
const makeDogOption = (data, arrayNum) => {
  const option = document.createElement("option")
  option.textContent = data.message[arrayNum]
  option.value = data.message[arrayNum]
  // console.log(option)
  breeds.append(option)
}

loadButton.onclick = () => {
  // console.log(breeds.value)
  const inputElement = breeds.value
  const hound = inputElement
  fetch(`https://dog.ceo/api/breed/${hound}/images/random`)
    .then((res) => {
      console.dir(res)
      return res.json()
    })
    .then((data) => {
      console.dir(data)
      const imageElement = document.createElement("img")
      imageElement.src = data.message
      imageElement.alt = hound
      imagesContainer.append(imageElement)
    })
}

const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  // fetch がおわったら１つめの then の中の関数を実行し、
  .then((res) => {
    //ここの引数に入るのは、fetchから受け取ったもの(名前は便宜上res)
    return res.json() // 結果を json として読み込む
  })
  // １つめが終わったら２つめの then の中の関数を実行します。
  .then((data) => {
    //ここの引数に入るのは、上のjsonデータ(名前は便宜上data)
    imageElement.src = data.message // 画像を表示する
  })

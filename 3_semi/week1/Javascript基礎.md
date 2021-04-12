# Javascript の基礎

## Javascript の関数

引数を処理の一部に組み込んで新しい値をつくる

## Javascript と DOM

Javascript と HTML は、DOM（Document Object Model）を介して繋がっている

- 仮想 DOM と聞いたことがあるが、同じもの？
-

## Javascript のオブジェクト

### 要素を見るとき

console.log()もしくは、console.dir()を使う

２つの違い
conosle.log()はオブジェクトを横方法に羅列する。
HTML 文書をそのまま出力する。

console.dir()はオブジェクトを縦に羅列する。
DOM をして解釈するため、オブジェクトとして全てのノードを羅列する。

### イベントオブジェクト

JS のイベントオブジェクト(e)には、起こったイベントの詳細が格納されている。
わからなくなったら console.log(e)で挙動確認できる。
イベントハンドラがある時に引数に指定するもの。

ex)
input 要素に"a"と打ち込んだとき
e.target.value = a が格納
"b"と打ったら
e.target.value には b が格納

## Javascript を要素で操作する

Nodelist は、DOM から対応するノードを格納している配列風オブジェクト

.getelementbyId や queryselector, queryselectorall など

HTMLCollection は HTML 文書の中から対応するタグを引っ張り出してくる配列風オブジェクト
これは何番目としてできるらしい。

.children や.form など

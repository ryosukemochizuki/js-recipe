## API

Web 上に公開されていて、プログラムから利用できるアプリケーションのこと。
　 → 公開サーバーにアクセスすると欲しいデータが返ってくるアプリ
　　 →URL にリクエストを投げたら、レスポンスとしてデータが返ってくるアプリ

WebAPI は公式ドキュメントを見る

fetch は時間がかかるので、取得している間に他のコードも同時進行する。→ 非同期処理

dogAPI や catAPI などのようなものより、自分固有の APIkey を発行するものして認証を組み込むものが多い

JSON データは全体が大きな文字列としてあるのでオブジェクトとして扱うためには一番外側の""をとる →JSON.parse

### Location

今いる URL を持っているプロパティ
document.location もしくは window.location で使用化
mdn => https://developer.mozilla.org/ja/docs/Web/API/Location

### openWeather reference

- https://openweathermap.org/api

### callback 関数

関数の中で呼び出される関数のこと。
関数の引数に取られる関数。外部で定義したものでも、直接定義するでも。

関数の処理の中で、コールバック関数の結果を使って関数の処理をしたい時。

- Array.foreach(() => {})
- setInterval(関数, 秒数)
- .then(() => {}) promise と関係する。簡単にいうと、promise の組み込みメソッド。

### Promise

作成時点(fetch でとってきただけの時)では分からなくて良い、data の代理みたいなもの。
意味あるデータを取得したいなら、Premise に.json()メソッドを使う。

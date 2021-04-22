## API

Web 上に公開されていて、プログラムから利用できるアプリケーションのこと。
　 → 公開サーバーにアクセスすると欲しいデータが返ってくるアプリ
　　 →URL にリクエストを投げたら、レスポンスとしてデータが返ってくるアプリ

WebAPI は公式ドキュメントを見る

fetch は時間がかかるので、取得している間に他のコードも同時進行する。→ 非同期処理

JSON データは全体が大きな文字列としてあるのでオブジェクトとして扱うためには一番外側の""をとる →JSON.parse

### Location

今いる URL を持っているプロパティ
document.location もしくは window.location で使用化
mdn => https://developer.mozilla.org/ja/docs/Web/API/Location

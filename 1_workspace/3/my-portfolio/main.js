new Vue({
  el: "#app",
  data: {
    fadeIn: false, // home
    // aboutme
    aboutmes: [
      {
        question: "Name",
        answer: "望月僚介",
        seen: false,
      },
      {
        question: "Age",
        answer: "21",
        seen: false,
      },
      {
        question: "Born in...",
        answer: "東京",
        seen: false,
      },
      {
        question: "University",
        answer: "駒澤大学",
        seen: false,
      },
      {
        question: "Faculty",
        answer: `学部: グローバルメディアスタディーズ 学科:グローバルメディア`,
        seen: false,
      },
      {
        question: "Grade",
        answer: "4年",
        seen: false,
      },
    ],
    seenHobby: false,
    countries: [
      { imagePath: "./images/singapore.png", name: "singapore" },
      { imagePath: "./images/thailand.png", name: "thailand" },
      { imagePath: "./images/india.png", name: "india" },
      { imagePath: "./images/vietnam.png", name: "vietnam" },
      { imagePath: "./images/malaysia.png", name: "malaysia" },
      { imagePath: "./images/cambodia.png", name: "cambodia" },
      { imagePath: "./images/philippines.png", name: "philippines" },
    ],
    countriesOpen: false,
    // gallery
    slides: [
      {
        imagePath: "./images/cambodia1.jpg",
        title: "カンボジア・プレアビヒア寺院",
      },
      {
        imagePath: "./images/india1.jpg",
        title: "インド・スラム街ジャキーラの子供達",
      },
      {
        imagePath: "./images/malaysia1.jpg",
        title: "マレーシア・ペトロナスツインタワー",
      },
      {
        imagePath: "./images/philippines1.jpg",
        title: "フィリピン・パングラオ島",
      },
      {
        imagePath: "./images/singapore1.png",
        title: "シンガポール・ガーデンズバイザベイ",
      },
      {
        imagePath: "./images/thailand1.png",
        title: "タイ・タラートロットファイラチャダー",
      },
      { imagePath: "./images/vietnam1.jpg", title: "ベトナム・ホイアン" },
    ],
    nowPhoto: 0,
    // humburger-menu
    menuOpen: false,
    // smooth
    triggerHref: "",
    targetHref: "",
    posFromPageToBrawer: 0,
    targetPosFromBrawer: 0,
    targetPos: 0,
  },
  methods: {
    // aboutmeの動作
    showAnswer: function(num) {
      this.aboutmes[num].seen = true
    },
    showHobby: function() {
      this.seenHobby = true
    },
    showCountries: function() {
      this.countriesOpen === false
        ? (this.countriesOpen = true)
        : (this.countriesOpen = false)
    },
    // galleryの動作
    showNextPhoto: function() {
      this.nowPhoto === this.slides.length - 1
        ? (this.nowPhoto = 0)
        : (this.nowPhoto += 1)
    },
    showBeforePhoto: function() {
      this.nowPhoto === 0
        ? (this.nowPhoto = this.slides.length - 1)
        : (this.nowPhoto -= 1)
    },
    // humburger-menu
    showMenu: function() {
      this.menuOpen === false ? (this.menuOpen = true) : (this.menuOpen = false)
    },
    // smooth
    scrollToTarget: function(e) {
      console.dir(e)
      this.triggerHref = e.target.hash
      console.log(this.triggerHref)
      this.targetHref = this.triggerHref.replace("#", "")
      console.log(this.targetHref)
    },
    // navAction
    navAction: function(e) {
      this.showMenu()
      this.scrollToTarget(e)
    },
  },
  // 読み込み時レンダリングまで終了した後
  mounted: function() {
    // console.log(this.fadeIn)
    // home
    setTimeout(
      function() {
        this.fadeIn = true
        // console.log(this.fadeIn)
      }.bind(this),
      2000,
    )
    // gallery
    setInterval(this.showNextPhoto.bind(this), 5000)
  },
})

// // スムーズにスクロール

// const navLinks = document.querySelectorAll(".nav-link")
// // 情報を得る関数
// const getInfo = function(num) {
//   const triggerHref = navLinks[num].getAttribute("href") // link自身のhrefを保存
//   const targetHref = document.getElementById(triggerHref.replace("#", "")) // linkの#を除いたidを持つ要素を保存 nodeの情報で位置が分かる

//   const positionFromPageTopToBrawerTop = pageYOffset // ページのトップからブラウザのトップまで
//   const targetPositionFromBrawer = targetHref.getBoundingClientRect().top // ブラウザのトップから目的地までの距離
//   const targetPositon =
//     positionFromPageTopToBrawerTop + targetPositionFromBrawer - 64 // 合計 - headerの高さ

//   return targetPositon // 結果を返す
// }
// // クリックイベントを登録する関数
// const clickLink = function(num) {
//   navLinks[num].onclick = function(e) {
//     e.preventDefault() // 標準のスクロールを停止する
//     const targetPosition = getInfo(num) // targetPositionの取得
//     // 組み込みメソッドscrollで位置, 動作指定する
//     window.scroll({
//       top: targetPosition,
//       behavior: "smooth",
//     })
//   }
// }
// // linkがある個数分だけイベントを作る
// for (let i = 0; i < navLinks.length; i++) {
//   clickLink(i)
// }

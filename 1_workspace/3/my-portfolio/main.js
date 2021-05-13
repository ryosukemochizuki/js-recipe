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
    getInfo: function(e) {
      this.triggerHref = e.target.hash
      this.targetHref = document.getElementById(
        this.triggerHref.replace("#", ""),
      )
      this.posFromPageToBrawer = this.targetHref.getBoundingClientRect().top
      this.targetPosFromBrawer = window.pageYOffset
      this.targetPos = this.posFromPageToBrawer + this.targetPosFromBrawer - 64
      console.log(this.targetPos)
    },
    scrollToTarget: function(e) {
      this.getInfo(e)
      e.preventDefault()
      window.scroll({
        top: this.targetPos,
        behavior: "smooth",
      })
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

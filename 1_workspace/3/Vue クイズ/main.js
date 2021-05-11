new Vue({
  el: "#app",
  data: {
    quizes: [
      {
        question: "この星の名前はなんでしょう？",
        imagePath: "./images/Ganymede.jpg",
        choices: [
          {
            answer: "ガニメデ",
            feedback: "正解！ガニメデは、木星の第三惑星だよ！",
          },
          {
            answer: "ゼニガメ",
            feedback:
              "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
          },
          {
            answer: "ゴリアテ",
            feedback:
              "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
          },
        ],
      },
      {
        question: "この城の名前はなんでしょう？",
        imagePath: "./images/Maruoka.png",
        choices: [
          {
            answer: "まるおか",
            feedback: "正解！",
          },
          {
            answer: "まる",
            feedback: "残念！",
          },
          {
            answer: "おか",
            feedback: "残念！",
          },
        ],
      },
    ],
    feedbackDisc: "",
    order: 0,
  },
  methods: {
    showAnswer: function(id) {
      this.feedbackDisc = this.quizes[this.order].choices[id].feedback
    },
    showNext: function() {
      this.feedbackDisc = ""
      this.order++
    },
  },
})

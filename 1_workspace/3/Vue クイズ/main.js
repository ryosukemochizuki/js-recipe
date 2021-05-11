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
    ],
    feedbackDisc: "",
  },
  methods: {
    showAnswer: function(id) {
      this.feedbackDisc = this.quizes[0].choices[id].feedback
    },
  },
})

new Vue({
  el: "#app",
  data: {
    redNum: 0,
    greenNum: 0,
    blueNum: 200,
    opacityNum: 0.5,
    // 選択した色を残しておく
    colors: [],
  },
  methods: {
    // マウスがいる場所を更新(mousemoveイベント)
    changeColor: function(e) {
      this.redNum = e.offsetY
      this.greenNum = e.offsetX
    },
    // 固定の色を保存(クリックイベント)
    createMini: function() {
      const color = {
        red: this.redNum,
        green: this.greenNum,
        blue: this.blueNum,
        opacity: this.opacityNum,
      }
      this.colors.push(color)
    },
    // 本パレットの色をミニ色に(miniをクリック)
    showMiniColor: function(color) {
      this.redNum = color.red
      this.greenNum = color.green
      this.blueNum = color.blue
      this.opacityNum = color.opacity
    },
    changeBlue: function(e) {
      this.blueNum = e.offsetX
    },
    changeOpacity: function(e) {
      this.opacityNum = Math.floor(e.offsetX / 20) / 10
    },
  },
  computed: {
    // dataの色関係が変わったら自動更新(本パレット)
    showColor: function() {
      return {
        backgroundColor: `rgba(${this.redNum}, ${this.greenNum}, ${this.blueNum}, ${this.opacityNum})`,
      }
    },
    showBlue: function() {
      return {
        backgroundColor: `rgba(0, 0, ${this.blueNum}, ${this.opacityNum})`,
      }
    },
  },
})

new Vue({
  el: "#app",
  data: {
    redNum: 0,
    greenNum: 0,
    blueNum: 200,
    opacityNum: 0.5,
  },
  methods: {
    changeColor: function(e) {
      this.redNum = e.offsetY
      this.greenNum = e.offsetX
    },
  },
  computed: {
    showColor: function() {
      return {
        backgroundColor: `rgba(${this.redNum}, ${this.greenNum}, ${this.blueNum}, ${this.opacityNum})`,
      }
    },
  },
})

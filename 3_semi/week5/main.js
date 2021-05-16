const app = new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
  },
  computed: {
    three: function() {
      if (this.count % 3 === 0) {
        return this.count + "!!!"
      } else {
        return this.count
      }
    },
  },
})

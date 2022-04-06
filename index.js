/* global Vue */
var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Your Name.", "The Prestige", "Avengers: Endgame"],
    };
  },
};

Vue.createApp(App).mount("#app");

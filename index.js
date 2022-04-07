/* global Vue */
var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Your Name.", "The Prestige", "Avengers: Endgame"],
      newMovie: "",
    };
  },
  methods: {
    addNewMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
  },
};

Vue.createApp(App).mount("#app");

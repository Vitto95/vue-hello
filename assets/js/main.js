const app = new Vue({
  el: "#app",
  data: {
    message: "Ciao Mondo!",
    name: "Giuseppe",
    surname: "Verdi",
    color: "",
    transform: "",
    imageURL: "../assets/img/windows.jpg",
  },
  methods: {
    changeColor(classe) {
      this.color = classe;
    },
    textTransform(action) {
      this.transform = action;
    },
  },
});

console.log("Hello World");
console.log(app);

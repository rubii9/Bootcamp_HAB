<template>
  <div class="home">
    <p>{{ speak }}</p>
    <button @click="changeDialog()" v-show="this.dialogs[this.dialog].game">NEXT</button>
    <button v-show="!this.dialogs[this.dialog].game">
      <router-link :to="{ name: 'Game' }">FIGHT!</router-link>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      dialog: 0,
      dialogs: [
        {
          text: "Hi, how are you?",
          dialog: 0,
          game: true
        },
        {
          text: "In this game you will fight vs a enemy, could you beat him?",
          dialog: 1,
          game: true
        },
        {
          text: "Lets go... Are you ready?",
          dialog: 2,
          game: false
        }
      ]
    };
  },
  computed: {
    speak() {
      return this.dialogs[this.dialog].text;
    }
  },
  methods: {
    changeDialog() {
      this.dialog++;
    }
  },
  created() {
    document.title = "Home|DefeatEnemy";
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 60vh;
}
p {
  color: white;
  align-self: center;
}
button {
  align-self: center;
  width: 100px;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  color: white;
  border: 1px solid white;
  border-radius: 6px;
  background: gray;
  padding: 1rem;
  margin: 0.667rem;
  font-weight: bold;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 0.5);
}
button:hover {
  background-color: #008cba;
  color: white;
  border: 1px solid gray;
}
a {
  color: white;
  text-decoration: none;
  margin: 0 auto;
  padding: 1rem 0;
}
</style>

<template>
  <div class="message">
    <div class="winner" v-show="seewinner">
      <p>Congratulations!🏆</p>
      <p>You win</p>
      <button @click="giveUpEvent">Reset</button>
    </div>
    <div class="looser" v-show="seelooser">
      <p>Oh... Sorry</p>
      <p>You lost, try again 👇</p>
      <button @click="giveUpEvent">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    seewinner: Boolean,
    seelooser: Boolean
  },
  methods: {
    giveUpEvent() {
      this.$emit("giveUp");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

.message {
  margin: 0 auto;
  font-family: "Roboto", serif, sans-serif;
}
p {
  font-size: 2rem;
  color: gold;
  font-weight: 900;
  margin: 0.5rem;
}
button {
  width: 150px;
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
</style>
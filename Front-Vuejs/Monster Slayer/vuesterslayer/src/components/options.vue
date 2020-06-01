<template>
  <div>
    <div class="options">
      <button @click="attackEvent">ATTACK ⚔️</button>
      <button @click="specialAttackEvent">
        SPECIAL 🗡🔝
        <p>Remaining: {{specials}}</p>
      </button>
      <button @click="healEvent">
        HEAL ❤️
        <p>Remaining: {{heals}}</p>
      </button>
      <button @click="giveUpEvent">GIVE UP 🕳</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "options",
  props: {
    heals: Number,
    specials: Number
  },
  methods: {
    attackEvent() {
      this.$emit("attack");
    },
    specialAttackEvent() {
      this.$emit("specialAttack");
    },
    healEvent() {
      this.$emit("heal");
    },
    giveUpEvent() {
      this.$emit("giveUp");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
.options {
  width: 80%;
  padding: 1rem;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  font-family: "Roboto", serif, sans-serif;
}

.options button p {
  font-size: 0.75rem;
  margin: 0.3rem 0;
}
.options button {
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
.options button:hover {
  background-color: #008cba;
  color: white;
  border: 1px solid gray;
}
</style>
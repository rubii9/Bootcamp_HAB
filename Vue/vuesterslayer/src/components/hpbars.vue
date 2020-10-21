<template>
  <div>
    <div class="hpbars">
      <div class="player">
        <p>⚔️ PLAYER 🏹</p>
        <div
          class="bar"
          :style="{ width: playerHp + '%' }"
          :class="{ red: playerHp < 20, orange: playerHp < 50 }"
        >{{ playerHp }}</div>
        <img src="../assets/img/heroe.png" alt />
      </div>

      <div class="enemy">
        <p>🔥 ENEMY 🐉</p>
        <div
          class="bar"
          :style="{ width: enemyHp + '%' }"
          :class="{ red: enemyHp < 20, orange: enemyHp < 60 }"
        >{{ enemyHp }}</div>
        <img src="../assets/img/drake.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hpbars",
  props: {
    playerHp: Number,
    enemyHp: Number
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");

.hpbars {
  text-align: center;
  color: #cbcdcd;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  font-family: "Roboto", serif, sans-serif;
  margin: 0 auto;
  padding: 1rem;
}
.bar {
  color: green;
  font-weight: bold;
  background: greenyellow;
  margin: auto;
  border-radius: 20px;
  height: 40px;
  display: block;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.player {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-basis: 50%;
}

.orange {
  background: orange;
}
.red {
  background: red;
}
p {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem auto;
  font-family: "Acme", serif, sans-serif;
  text-shadow: 2px 2px black;
}

.enemy {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-basis: 50%;
}

img {
  width: 200px;
  height: 200px;
  display: block;
  align-self: center;
}

@media (max-width: 700px) {
  img {
    width: 120px;
    height: 120px;
  }
  p {
    font-size: 1rem;
  }
}
</style>

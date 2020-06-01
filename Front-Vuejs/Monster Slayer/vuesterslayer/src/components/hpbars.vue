<template>
  <div>
    <div class="hpbars">
      <p>Player (you)</p>
      <div class="bar" :style="{ width: playerHp + '%'}">{{ playerHp }}</div>
      <p>Enemy</p>
      <div class="bar" :style="{ width: enemyHp + '%'}">{{ enemyHp }}</div>
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
.hpbars {
  text-align: center;
  color: white;
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
</style>
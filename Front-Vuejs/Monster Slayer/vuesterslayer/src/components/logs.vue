<template>
  <div class="register">
    <div class="logs" v-for="log in logs" :key="log.id">
      {{ log.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "logs",
  props: {
    logs: Array,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

.logs {
  color: green;
  font-weight: bold;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 1rem;
  text-align: center;
}
.register {
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: "Roboto", serif, sans-serif;
  margin: 0 auto;
  width: 30%;
}
</style>

<template>
  <div class="register">
    <H1>Logs:</H1>
    <div class="logs" v-for="log in logs" :key="log.id">{{ log.text }}</div>
  </div>
</template>

<script>
export default {
  name: "logs",
  props: {
    logs: Array
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

.logs {
  color: white;
  font-weight: bold;
  font-size: 0.85rem;
  margin: 0.5rem auto;
  padding: 0.5rem;
  text-align: center;
  width: 120px;
  border: 2px solid greenyellow;
  border-radius: 20px;
  width: 60%;
}
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-family: "Roboto", serif, sans-serif;
  margin: 0 auto;
  width: 30%;
  border: 1px dashed white;
}
h1 {
  color: #cbcdcd;
}
@media (max-width: 700px) {
  .register {
    width: 100%;
  }
}
</style>

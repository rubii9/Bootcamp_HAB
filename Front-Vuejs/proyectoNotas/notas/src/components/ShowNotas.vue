<template>
  <div>
    <div class="nota" v-for="nota in notas" :key="nota.id">{{nota.texto}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowNotas",
  props: {
    notas: Array
  }
};
</script>

<style>
</style>
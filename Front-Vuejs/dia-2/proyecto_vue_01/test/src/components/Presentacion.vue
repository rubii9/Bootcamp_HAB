<template>
  <div>
    <h1>
      {{ saludo }}
    </h1>
    <p>
      ¿Qué tal?
    </p>
  </div>
</template>

<script>
export default {
  name: "Presentacion",
  props: {
    saludo: String,
  },
};
</script>
<style scoped>
h1 {
  color: red;
}</style
>>

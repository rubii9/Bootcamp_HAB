<template>
  <div>
    <p>
      {{ counter }}
    </p>
    <button @click="eventIncrease()">Sumar</button>
    <button @click="eventDecrease()">Restar</button>
  </div>
</template>

<script>
export default {
  name: "Contador",
  props: {
    counter: Number,
  },
  methods: {
    //Lanza evento "increase" a la vista
    eventIncrease() {
      this.$emit("increase");
    },
    //Lanza evento "decrease" a la vista
    eventDecrease() {
      this.$emit("decrease");
    },
  },
};
</script>

<style scoped></style>>

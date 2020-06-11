<template>
  <div>
    <div class="product" v-for="product in productos" :key="product.id">
      <p>ID: {{ product.id }}</p>
      <img :src="product.img" />
      <p>Nombre: {{ product.nombre }}</p>
      <p>Descripción: {{ product.descripcion }}</p>
      <p>Estado: {{ product.estado }}</p>
      <p>Precio: {{ product.precio }}</p>
      <p>Stock: {{ product.stock }}</p>
      <button @click="pedirEvent">Pedir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "listaProductos",
  props: {
    productos: Array,
  },
  methods: {
    pedirEvent() {
      this.$emit("pedir");
    },
  },
};
</script>

<style scoped>
img {
  height: 300px;
  width: 300px;
}
</style>

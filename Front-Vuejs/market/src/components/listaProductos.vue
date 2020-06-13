<template>
  <div>
    <div class="product" v-for="product in productos" :key="product.id">
      <p>Producto ID: {{ product.id }}</p>
      <img :src="product.img" />
      <p>
        <strong>{{ product.nombre }}</strong>
      </p>
      <p>{{ product.descripcion }}</p>
      <p>
        <strong>Estado:</strong>
        {{ product.estado }}
      </p>
      <p>
        <strong>Precio:</strong>
        {{ product.precio }} €
        <strong>Stock:</strong>
        {{ product.stock }}
      </p>

      <button @click="pedirEvent">Pedir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "listaProductos",
  props: {
    productos: Array
  },
  methods: {
    pedirEvent() {
      this.$emit("pedir");
    }
  }
};
</script>

<style scoped>
.product {
  width: 40%;
  padding: 1rem;
  margin: 5rem auto;
  border-radius: 20px;
  background-color: rgba(43, 39, 39, 0.65);
}

img {
  border: 2px solid #42b983;
  border-radius: 20px;
  height: 300px;
  width: 300px;
}
button {
  width: 80px;
  cursor: pointer;
  text-align: center;
  color: white;
  background: #42b983;
  border: 2px solid #d6cdb6;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0.667rem;
  font-weight: bold;
  align-self: center;
  justify-self: center;
}
button:hover {
  background-color: #008cba;
  color: white;
  border: 2px solid gray;
}
button:focus {
  outline: none;
}
</style>

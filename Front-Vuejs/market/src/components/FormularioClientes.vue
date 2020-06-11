<template>
  <div>
    <div>
      <p v-show="required">Tienes datos sin completar</p>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <br />
      <label for="apellido">Apellido:</label>
      <input type="text" name="apellido" placeholder="Apellido del cliente" v-model="apellido" />
      <br />
      <label for="ciudad">Ciudad:</label>
      <input type="text" name="ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <br />
      <label for="empresa">Empresa:</label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
      <br />
      <button @click="addClientEvent">CREAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioClientes",
  props: {
    nombre: String,
    apellido: String,
    ciudad: String,
    empresa: String,
    required: Boolean
  },
  methods: {
    addClientEvent() {
      this.$emit("add");
    }
  }
};
</script>

<style>
</style>
<template>
  <div>
    <div class="formulario">
      <h2>Crear nuevo cliente ✍🏻</h2>
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
    required: Boolean
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: ""
    };
  },
  methods: {
    addClientEvent() {
      this.$emit("add", this.nombre, this.apellido, this.ciudad, this.empresa);
    }
  }
};
</script>

<style scoped>
input {
  margin: 1rem;
  border: 1px solid white;
  border-radius: 20px;
  padding: 0.5rem;
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

@media (max-width: 700px) {
  .formulario {
    margin: 1rem;
  }
  input {
    padding: 0.25rem;
  }

  h2 {
    font-size: 1.25rem;
  }
}
</style>

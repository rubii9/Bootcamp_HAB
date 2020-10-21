<template>
  <div>
    <div class="client" v-for="(client,index) in clientes" :key="client.id">
      <p>ID: {{ client.id }}</p>
      <p>Nombre: {{ client.nombre }}</p>
      <p>Apellido: {{ client.apellido }}</p>
      <p>Ciudad: {{ client.ciudad }}</p>
      <p>Empresa: {{ client.empresa }}</p>
      <button @click="editClientEvent(index)">EDIT</button>
      <button @click="deleteClientEvent(index)" class="delete">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "listaClientes",
  props: {
    clientes: Array
  },
  methods: {
    editClientEvent(index) {
      // Guaradandno la info de la nota seleccionada
      let data = this.clientes[index];
      // Enviando la info de la nota a la vista
      this.$emit("edit", data);
    },
    deleteClientEvent(index) {
      let data = this.clientes[index].id;

      this.$emit("delete", data);
    }
  }
};
</script>

<style scoped>
.client {
  width: 20%;
  padding: 1rem;
  margin: 5rem auto;
  border-radius: 20px;
  background-color: rgba(180, 175, 175, 0.45);
  box-shadow: 2px 2px 5px #42b983;
}
.delete {
  background: tomato;
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
  margin: 0.4rem;
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

@media (max-width: 800px) {
  .client {
    width: 30%;
  }
}
@media (max-width: 700px) {
  .client {
    width: 60%;
  }
}
</style>
<template>
  <div>
    <div class="client" v-for="(client,index) in clientes" :key="client.id">
      <p>ID: {{ client.id }}</p>
      <p>Nombre: {{ client.nombre }}</p>
      <p>Apellido: {{ client.apellido }}</p>
      <p>Ciudad: {{ client.ciudad }}</p>
      <p>Empresa: {{ client.empresa }}</p>
      <button @click="editClientEvent(index)">EDIT</button>
      <button @click="deleteClientEvent(index)">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowClients",
  props: {
    clientes: Array
  },
  methods: {
    editClientEvent(index) {
      //SAVING INFO INTO SELECTED NOTE
      let data = this.clientes[index];
      //SENDING NOTE'S INFO TO VIEW
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
</style>
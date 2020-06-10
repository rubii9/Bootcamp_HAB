<template>
  <div class="home">
    <h2>Lista de clientes</h2>
    <div
      class="clientes"
      v-for="(cliente, index) in clientes"
      :key="cliente.id"
    >
      <p>ID: {{ cliente.id }}</p>
      <p>Nombre: {{ cliente.nombre }}</p>
      <p>Apellido: {{ cliente.apellido }}</p>
      <p>Ciudad: {{ cliente.ciudad }}</p>
      <p>Empresa: {{ cliente.empresa }}</p>
      <button @click="deleteClients(index)">Borrar</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      clientes: [],
    };
  },
  methods: {
    getClients() {
      let self = this;
      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          self.clientes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteClients(index) {
      let data = this.clientes[index].id;
      axios
        .delete("http://localhost:3050/clientes/del/" + data)
        .then(function(response) {
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getClients();
  },
};
</script>

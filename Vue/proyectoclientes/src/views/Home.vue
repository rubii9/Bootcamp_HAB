<template>
  <div class="home">
    <h2>Lista de clientes</h2>
    <div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
      <p>ID: {{ cliente.id }}</p>
      <p>Nombre: {{ cliente.nombre }}</p>
      <p>Apellido: {{ cliente.apellido }}</p>
      <p>Ciudad: {{ cliente.ciudad }}</p>
      <p>Empresa: {{ cliente.empresa }}</p>
      <button @click="deleteClients(index)">Borrar</button>
      <button @click="openModal()">Editar</button>
    </div>

    <!-- MODAL PARA EDITAR -->
    <div class="modal" v-show="modal">
      <div class="modalBox">
        <h2>Modal para datos</h2>
        <input type="text" placeholder />
        <br />
        <br />
        <button @click="closeModal()">Cerrar</button>
      </div>
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
      modal: false
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
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
  },
  created() {
    this.getClients();
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.modalBox {
  background: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>
<template>
  <div class="home">
    <h2>Lista de clientes</h2>

    <!-- COMPONENTE DE CLIENTES -->
    <listaclientes :clientes="clientes" v-on:edit="openModal" v-on:delete="deleteClients"></listaclientes>

    <!-- MODAL PARA EDITAR -->
    <div class="modal" v-show="modal">
      <div class="modalBox">
        <h2>Editar cliente</h2>
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
import listaclientes from "@/components/listaClientes.vue";

export default {
  name: "Clientes",
  components: { listaclientes },
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
    deleteClients(data) {
      //data es el valor del id que lo pasamos mediante el componente
      axios
        .delete("http://localhost:3050/clientes/del/" + data, {
          id: this.id
        })
        .then(function(response) {
          console.log(response);
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
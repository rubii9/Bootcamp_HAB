<template>
  <div class="home">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Clients" description="Home page" />

    <!-- MENU -->
    <menucustom></menucustom>

    <h2>Lista de clientes</h2>

    <!-- COMPONENTE DE CLIENTES -->
    <listaclientes
      :clientes="clientes"
      v-on:edit="openModal"
      v-on:delete="deleteClients"
    ></listaclientes>

    <!-- MODAL PARA EDITAR CLIENTE -->
    <div class="modal" v-show="modal">
      <div class="modalBox">
        <h2>Editar cliente</h2>
        <input type="text" placeholder />
        <br />
        <br />
        <button @click="closeModal()">Cerrar</button>
      </div>
    </div>

    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// @ is an alias to /src
//IMPORTANDO AXIOS
import axios from "axios";
//IMPORTANDO CLIENTES
import listaclientes from "@/components/listaClientes.vue";
//IMPORTANDO MENU
import menucustom from "@/components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "../components/FooterCustom.vue";

export default {
  name: "Clientes",
  components: { listaclientes, menucustom, footercustom },
  data() {
    return {
      clientes: [],
      modal: false,
    };
  },
  methods: {
    //OBTENER LOS CLIENTES DE LA BBDD
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
    //ELIMINAR CLIENTES DE LA BBDD
    deleteClients(data) {
      //data es el valor del id que lo pasamos mediante el componente
      axios
        .delete("http://localhost:3050/clientes/del/" + data, {
          id: data,
        })
        .then(function(response) {
          console.log(response);
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //FUNCION QUE ABRE EL POP UP PARA EDITAR
    openModal() {
      this.modal = true;
    },
    //FUNCION QUE CIERRA EL POP UP PARA EDITAR
    closeModal() {
      this.modal = false;
    },
  },
  created() {
    this.getClients();
  },
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

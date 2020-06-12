<template>
  <div class="home">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Clients" description="Home page" />

    <!-- MENU -->
    <menucustom></menucustom>

    <h2>Lista de clientes</h2>

    <!-- COMPONENTE DE CLIENTES -->
    <listaclientes :clientes="clientes" v-on:edit="openModal" v-on:delete="deleteClients"></listaclientes>

    <!-- MODAL PARA EDITAR CLIENTE -->
    <div class="modal" v-show="modal">
      <div class="modalBox" v-on:edit="showEditText">
        <h2>Editar cliente</h2>
        <label for="newName">Nombre:</label>
        <input v-model="newName" placeholder="Text appears here" />
        <br />
        <label for="newSurname">Apellido:</label>
        <input v-model="newSurname" placeholder="Text appears here" />
        <br />
        <label for="newCity">Ciudad:</label>
        <input v-model="newCity" placeholder="Text appears here" />
        <br />
        <label for="newCompany">Empresa:</label>
        <input v-model="newCompany" placeholder="Text appears here" />
        <br />
        <button @click="updateClient()">UPDATE</button>
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
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";

export default {
  name: "Clientes",
  components: { listaclientes, menucustom, footercustom },
  data() {
    return {
      clientes: [],
      modal: false,
      newName: "",
      newSurname: "",
      newCity: "",
      newCompany: "",
      id: null
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
          id: data
        })
        .then(function(response) {
          Swal.fire({
            icon: "success",
            title: "Your client has been deleted",
            showConfirmButton: false,
            timer: 1500
          }).then(result => location.reload());
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //FUNCION QUE ABRE EL POP UP PARA EDITAR
    openModal(data) {
      this.modal = true;
      this.showEditText(data);
    },
    //FUNCION QUE CIERRA EL POP UP PARA EDITAR
    closeModal() {
      this.modal = false;
    },
    showEditText(data) {
      this.newName = data.nombre;
      this.newSurname = data.apellido;
      this.newCity = data.ciudad;
      this.newCompany = data.empresa;
      this.id = data.id;
    },
    // FUNCIÓN PARA ACTUALIZAR/EDITAR
    updateClient() {
      let self = this;
      axios
        .put("http://localhost:3050/clientes/update/" + self.id, {
          id: self.id,
          nombre: self.newName,
          apellido: self.newSurname,
          ciudad: self.newCity,
          empresa: self.newCompany
        })
        .then(function(response) {
          Swal.fire({
            icon: "success",
            title: "Your client has been edited",
            showConfirmButton: false,
            timer: 1500
          }).then(result => location.reload());
        })
        .catch(function(error) {
          console.log(error);
        });
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

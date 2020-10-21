<template>
  <div class="home">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Clients" description="Home page" />

    <!-- MENU -->
    <menucustom></menucustom>

    <h2>Lista de clientes 👔</h2>

    <!-- BUSQUEDA -->
    <div class="searchProduct">
      <label for="bySearch">Buscar un cliente:</label>
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="Nombre o id..."
      />
    </div>

    <!--  SIMBOLO DE CARGA  -->
    <div v-show="loading" class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- COMPONENTE DE CLIENTES -->
    <listaclientes :clientes="filteredClient" v-on:edit="openModal" v-on:delete="deleteClients"></listaclientes>

    <!-- MODAL PARA EDITAR CLIENTE -->
    <div class="modal" v-show="modal">
      <div class="modalBox" v-on:edit="showEditText">
        <h3>Editar cliente</h3>
        <div>
          <label for="newName">Nombre:</label>
          <input v-model="newName" placeholder="Text appears here" />
        </div>

        <div>
          <label for="newSurname">Apellido:</label>
          <input v-model="newSurname" placeholder="Text appears here" />
        </div>

        <div>
          <label for="newCity">Ciudad:</label>
          <input v-model="newCity" placeholder="Text appears here" />
        </div>

        <div>
          <label for="newCompany">Empresa:</label>
          <input v-model="newCompany" placeholder="Text appears here" />
        </div>

        <div>
          <button @click="updateClient()" class="update">UPDATE</button>
          <button @click="closeModal()">Cerrar</button>
        </div>
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
      id: null,
      search: "",
      loading: true
    };
  },
  methods: {
    //OBTENER LOS CLIENTES DE LA BBDD
    getClients() {
      let self = this;
      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          //TIEMPO DE CARGA
          setTimeout(function() {
            self.loading = false;
            self.clientes = response.data;
          }, 1000);
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
  },
  computed: {
    filteredClient() {
      if (!this.search) {
        return this.clientes;
      }
      return this.clientes.filter(
        cliente =>
          cliente.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
          cliente.id === parseInt(this.search)
      );
    }
  }
};
</script>

<style scoped>
.home {
  color: white;
}
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
  color: black;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.update {
  background: goldenrod;
}

input {
  width: 20%;
  border-radius: 20px;
  border: 1px solid grey;
  padding: 0.5rem;
  margin: 0.5rem;
}
label {
  font-weight: bold;
  margin: 0.5rem auto;
}

h2 {
  font-size: 3rem;
  text-shadow: 2px 2px #42b983;
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
  .searchProduct {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  input {
    align-self: center;
    width: 50%;
  }
  h2 {
    font-size: 1.5rem;
  }
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: cadetblue;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

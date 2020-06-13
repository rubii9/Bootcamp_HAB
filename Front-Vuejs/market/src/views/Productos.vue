<template>
  <div class="productos">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Productos" description="Product page" />

    <!-- MENU -->
    <menucustom class="menu"></menucustom>
    <h2>Lista de productos 🛒</h2>
    <!-- BUSQUEDA -->
    <div class="searchProduct">
      <label for="bySearch">Buscar un producto:</label>
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

    <!-- PRODUCTOS -->
    <listaproductos :productos="filteredProduct" v-on:pedir="pedir"></listaproductos>

    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
import axios from "axios";
//IMPORTANDO MENU
import menucustom from "../components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "../components/FooterCustom.vue";
//IMPORTANDO PRODUCTOS
import listaproductos from "../components/listaProductos.vue";
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";

export default {
  name: "Productos",
  components: { menucustom, footercustom, listaproductos },
  data() {
    return {
      productos: [],
      search: "",
      loading: true
    };
  },
  methods: {
    //OBTENER LOS PRODUCTOS DE LA BBD
    getProducts() {
      let self = this;
      axios
        .get("http://localhost:3050/productos")
        .then(function(response) {
          //TIEMPO DE CARGA
          setTimeout(function() {
            self.loading = false;
            self.productos = response.data;
          }, 1000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //MOSTRAR MENSAJE CON SWEETALERT
    pedir() {
      Swal.fire({
        title: "Pedido en camino",
        text: "Gracias por tu compra",
        confirmButtonText: "Ok"
      });
    }
  },
  created() {
    this.getProducts();
  },
  computed: {
    filteredProduct() {
      if (!this.search) {
        return this.productos;
      }
      return this.productos.filter(
        producto =>
          producto.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
          producto.id === parseInt(this.search)
      );
    }
  }
};
</script>

<style scoped>
.productos {
  color: white;
  background: url("https://statics.viralizalo.com/virs/2016/02/VIR_19866_2127_cuanto_sabes_de_skateboarding.jpg?cb=41204")
    no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

input {
  border-radius: 20px;
  border: 1px solid grey;
  padding: 0.5rem;
  margin: 0 1rem;
}
label {
  font-weight: bold;
}
h2 {
  font-size: 3rem;
  text-shadow: 2px 2px #42b983;
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

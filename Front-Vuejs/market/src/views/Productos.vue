<template>
  <div>
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Prodcucts" description="Product page" />

    <!-- MENU -->
    <menucustom></menucustom>

    <!-- PRODUCTOS -->
    <listaproductos :productos="productos" v-on:pedir="pedir"></listaproductos>

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
    };
  },
  methods: {
    //OBTENER LOS PRODUCTOS DE LA BBD
    getProducts() {
      let self = this;
      axios
        .get("http://localhost:3050/productos")
        .then(function(response) {
          self.productos = response.data;
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
        confirmButtonText: "Ok",
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>

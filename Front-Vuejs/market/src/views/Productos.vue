<template>
  <div>
    <menucustom></menucustom>
    <listaproductos :productos="productos" v-on:pedir="pedir"></listaproductos>
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

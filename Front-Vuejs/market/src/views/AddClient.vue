<template>
  <div>
    <!-- MENU -->
    <menucustom></menucustom>

    <!-- FORMULARIO PARA NUEVO CLIENTE -->
    <formulario :required="required" v-on:add="addClient"></formulario>

    <!--  FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios"; // Importando AXIOS
//IMPORTANDO MENU
import menucustom from "@/components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "@/components/FooterCustom.vue";
//IMPORTANDO FORMULARIO
import formulario from "@/components/FormularioClientes.vue";

export default {
  name: "AddClient",
  components: { menucustom, footercustom, formulario },
  data() {
    return {
      correctData: false,
      required: false,
    };
  },
  methods: {
    validatingData(nombre, apellido, ciudad, empresa) {
      if (nombre === "" || apellido === "" || ciudad === "" || empresa === "") {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    addClient(nombre, apellido, ciudad, empresa) {
      this.validatingData(nombre, apellido, ciudad, empresa);
      if (this.correctData == true) {
        let self = this;
        axios
          .post("http://localhost:3050/add", {
            nombre: nombre,
            apellido: apellido,
            ciudad: ciudad,
            empresa: empresa,
          })
          .then(function(response) {
            location.reload();
            //VACIAR CAMPOS
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("No has rellenado todos los campos");
      }
    },
  },
};
</script>

<template>
  <div class="addclient">
    <!-- MENU -->
    <menucustom class="menu"></menucustom>

    <!-- FORMULARIO PARA NUEVO CLIENTE -->
    <formulario :required="required" v-on:add="addClient" class="formulario"></formulario>

    <!--  FOOTER -->
    <footercustom class="footer"></footercustom>
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
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";

export default {
  name: "AddClient",
  components: { menucustom, footercustom, formulario },
  data() {
    return {
      correctData: false,
      required: false
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
            empresa: empresa
          })
          .then(function(response) {
            Swal.fire({
              icon: "success",
              title: "Your client has been created",
              showConfirmButton: false,
              timer: 1500
            }).then(result => location.reload());
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("No has rellenado todos los campos");
      }
    }
  }
};
</script>

<style  scoped>
.addclient {
  color: white;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  gap: 10rem;
  grid-template-areas: "menu" "formulario" "footer";
}

.menu {
  grid-area: menu;
}

.formulario {
  grid-area: formulario;
}

.footer {
  grid-area: footer;
}

@media (max-width: 700px) {
  .addclient {
    gap: 0;
  }
}
</style>

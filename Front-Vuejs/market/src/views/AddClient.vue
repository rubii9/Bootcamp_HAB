<template>
  <div>
    <menucustom></menucustom>
    <div>
      <p v-show="required">Tienes datos sin completar</p>
      <label for="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del cliente"
        v-model="nombre"
      />
      <br />
      <label for="apellido">Apellido:</label>
      <input
        type="text"
        name="apellido"
        placeholder="Apellido del cliente"
        v-model="apellido"
      />
      <br />
      <label for="ciudad">Ciudad:</label>
      <input
        type="text"
        name="ciudad"
        placeholder="Ciudad del cliente"
        v-model="ciudad"
      />
      <br />
      <label for="empresa">Empresa:</label>
      <input
        type="text"
        name="empresa"
        placeholder="Empresa del cliente"
        v-model="empresa"
      />
      <br />
      <button @click="addClient">
        CREAR
      </button>
    </div>
    <!-- <formulario></formulario> -->
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
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      correctData: false,
      required: false,
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    addClient() {
      this.validatingData();
      if (this.correctData == true) {
        let self = this;
        axios
          .post("http://localhost:3050/add", {
            nombre: self.nombre,
            apellido: self.apellido,
            ciudad: self.ciudad,
            empresa: self.empresa,
          })
          .then(function(response) {
            self.emptyFields();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("No has rellenado todos los campos");
      }
    },
    emptyFields() {
      (this.nombre = ""),
        (this.apellido = ""),
        (this.ciudad = ""),
        (this.empresa = "");
    },
  },
};
</script>

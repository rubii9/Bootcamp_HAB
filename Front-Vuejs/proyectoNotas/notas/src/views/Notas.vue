<template>
  <div class="home">
    <h2>¡Hola!👋</h2>
    <h4>Puedes crear tus notas con el formulario a continuación 👇</h4>

    <!--     FORMULARIO PARA NOTAS -->
    <form>
      <label for="testo">Texto de la nota:</label>
      <br />
      <textarea name="texto" id="textarea" cols="40" rows="5" v-model="texto"></textarea>
      <br />
      <button @click="addNote()">Add note</button>
    </form>

    <!-- NOTAS -->
    <h2>Notas 👇</h2>
    <notas :notas="notas"></notas>
  </div>
</template>

<script>
// @ is an alias to /src
import notas from "@/components/ShowNotas.vue";
import axios from "axios";
export default {
  name: "Notas",
  components: {
    notas
  },
  data() {
    return {
      // Variable donde guardo el texto de la nota
      texto: "",
      // Array de notas
      notas: []
    };
  },
  methods: {
    // FUNCION PARA AÑADIR NOTAS
    addNote() {
      let self = this;
      axios
        .post("http://localhost:3050/notas/add", {
          texto: self.texto
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // FUNCION PARA RECOGER LISTA DE NOTAS
    getNotes() {
      let self = this;
      axios
        .get("http://localhost:3050/notas")
        .then(function(response) {
          self.notas = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getNotes();
  }
};
</script>

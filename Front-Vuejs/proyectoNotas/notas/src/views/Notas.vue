<template>
  <div class="home">
    <vue-headful title="Notas" description="Notes list page " />
    <h2>¡Hey!👋</h2>
    <h4>You can add new notes with following form 👇</h4>

    <!--     FORMULARIO PARA NOTAS -->
    <form>
      <label for="texto">Text:</label>
      <br />
      <textarea
        name="texto"
        id="textarea"
        cols="40"
        rows="5"
        v-model="texto"
      ></textarea>
      <br />
    </form>
    <button @click="addNote()">Add note</button>

    <!-- NOTAS -->
    <h2>Notas 👇</h2>
    <p>Search by id:</p>
    <input v-model="search" placeholder="Id to search..." type="number" />
    <button>Search Id</button>
    <p>Updating your note:</p>
    <input v-model="newText" placeholder="Text appears here" />
    <button @click="updateNote()">UPDATE</button>
    <notas
      :notas="notas"
      v-on:edit="showEditText"
      v-on:delete="deleteNotes"
    ></notas>
  </div>
</template>

<script>
// @ is an alias to /src
import notas from "@/components/ShowNotas.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Notas",
  components: {
    notas,
  },
  data() {
    return {
      // Variable donde guardo el texto de la nota
      texto: "",
      // Array de notas
      notas: [],
      newText: "",
      id: null,
      search: "",
    };
  },
  methods: {
    // FUNCION PARA AÑADIR NOTAS
    addNote() {
      let self = this;
      axios
        .post("http://localhost:3050/notas/add", {
          texto: self.texto,
        })
        .then(function(response) {
          Swal.fire({
            icon: "success",
            title: "Your note has been added",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => location.reload());
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
    },
    showEditText(data) {
      this.newText = data.texto;
      this.id = data.id;
    },
    // FUNCIÓN PARA ACTUALIZAR/EDITAR
    updateNote() {
      let self = this;
      axios
        .put("http://localhost:3050/notas/update/" + self.id, {
          id: self.id,
          texto: self.newText,
        })
        .then(function(response) {
          Swal.fire({
            icon: "success",
            title: "Your note has been edited",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => location.reload());
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteNotes(data) {
      let self = this;
      this.id = data;
      axios
        .delete("http://localhost:3050/notas/del/" + this.id, {
          id: this.id,
        })
        .then(function(response) {
          Swal.fire({
            icon: "success",
            title: "Your note has been deleted",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => location.reload());
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // FUNCION PARA RECOGER LISTA DE NOTAS
    getNotesById() {},
  },
  created() {
    // LLAMO A GET NOTES CUANDO LA PAG SE CREA
    this.getNotes();
  },
};
</script>

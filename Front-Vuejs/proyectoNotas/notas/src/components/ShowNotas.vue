<template>
  <div>
    <div class="nota" v-for="(nota,index) in notas" :key="nota.id">
      {{nota.texto}}
      <button @click="editNoteEvent(index)">EDIT</button>
      <button @click="deleteNoteEvent(index)">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowNotas",
  props: {
    notas: Array
  },
  methods: {
    // Funcion que emite un evento para editar nota
    editNoteEvent(index) {
      // Guaradandno la info de la nota seleccionada
      let data = this.notas[index];
      // Enviando la info de la nota a la vista
      this.$emit("edit", data);
    },
    // Funcion que emite un evento para borrar nota
    deleteNoteEvent(index) {
      // Guardamos el id de la nota a borrar
      let data = this.notas[index].id;
      // Eviamos la id y el mensaje a la vista
      this.$emit("delete", data);
    }
  }
};
</script>

<style>
</style>
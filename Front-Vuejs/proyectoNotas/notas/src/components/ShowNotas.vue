<template>
  <div>
    <div class="nota" v-for="(nota,index) in notas" :key="nota.id">
      {{nota.texto}}
      <button @click="editNoteEvent(index)">EDIT</button>
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
    editNoteEvent(index) {
      //SAVING INFO INTO SELECTED NOTE
      let data = this.notas[index];
      //SENDING NOTE'S INFO TO VIST
      this.$emit("edit", data);
    }
  }
};
</script>

<style>
</style>
<template>
  <div>
    <!-- TITULO DE COLECCION -->
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: "TitleGallery",
  props: {
    title: String
  }
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
}
</style>
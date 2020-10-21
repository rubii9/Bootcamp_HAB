<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'GreekGallery' }">⚜️ Greek Gallery</router-link>
      <router-link :to="{ name: 'OrientalGallery' }">⚜️ Oriental Gallery</router-link>
      <router-link :to="{ name: 'RomanGallery' }">⚜️ Roman Gallery</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavGallerys"
};
</script>

<style scoped>
#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
#nav a {
  font-weight: bold;
  color: #42b983;
  margin: 0 0.25rem;
  text-decoration: none;
  font-size: 1.25rem;
}
</style>
<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'About' }">About</router-link>|
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom"
};
</script>

<style scoped>
#nav {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
  margin: 0 0.25rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

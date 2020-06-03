<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  margin: 0 0.5rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: #4040a1;
  height: 100vh;
}
</style>

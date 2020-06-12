<template>
  <div>
    <div id="nav">
      <router-link :to="{name:'Clientes'}">Clientes</router-link>|
      <router-link :to="{name:'About'}">About</router-link>|
      <router-link :to="{name:'AddClient'}">Añadir Clientes</router-link>|
      <router-link :to="{name:'Productos'}">Productos</router-link>|
      <button @click="logoutUser()">Logout</button>
      <p></p>
    </div>
  </div>
</template>

<script>
import { clearLogin } from "../api/utils";
export default {
  name: "MenuCustom",
  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
    }
  }
};
</script>

<style>
</style>
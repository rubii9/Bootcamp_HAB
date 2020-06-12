<template>
  <div class="menu">
    <div id="nav">
      <div class="enlaces">
        <router-link :to="{name:'Clientes'}">Clientes</router-link>
        <router-link :to="{name:'About'}">About</router-link>
        <router-link :to="{name:'AddClient'}">Añadir Clientes</router-link>
        <router-link :to="{name:'Productos'}">Productos</router-link>
      </div>

      <div class="user">
        <p>{{nombreUsuario}}</p>
        <button @click="logoutUser()">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { clearLogin } from "../api/utils";
export default {
  name: "MenuCustom",
  data() {
    return {
      nombreUsuario: ""
    };
  },
  methods: {
    logoutUser() {
      this.nombreUsuario = "";
      this.$router.push("/");
      return clearLogin();
    },
    getUserName() {
      this.nombreUsuario = localStorage.getItem("Usuario");
    }
  },
  created() {
    this.getUserName();
  }
};
</script>

<style scoped>
#nav {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  margin: auto 0.25rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
div .user {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
div .enlaces {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
button {
  display: inline-block;
}
</style>
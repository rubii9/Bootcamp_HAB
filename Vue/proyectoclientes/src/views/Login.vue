<template>
  <div>
    <h2>Haz login</h2>
    <input
      type="text"
      name="usuario"
      v-model="usuario"
      placeholder="Usuario..."
    />
    <br />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Password..."
    />
    <br />
    <button @click="login()">Login</button>
  </div>
</template>

<script>
import { loginUser } from "../api/utils";
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await loginUser(this.usuario, this.password);
        this.$router.push("/home");
      } catch (error) {
        alert(`Error: ${error}`);
      }
    },
  },
};
</script>

<style scoped></style>

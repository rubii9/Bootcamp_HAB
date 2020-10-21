<template>
  <div class="login">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Login" description="Login page" />
    <h1 class="title">Bienvenido/a a mi tienda</h1>
    <img
      class="image1"
      src="https://images.unsplash.com/photo-1537476102677-80bac0ab1d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt
    />
    <div class="loginBox">
      <h2>Haz login</h2>
      <input type="text" name="usuario" v-model="email" placeholder="Usuario..." />

      <input type="password" name="password" v-model="password" placeholder="Password..." />
      <div>
        <button @click="login()">Login</button>
        <router-link :to="{ name: 'Register' }">Registro</router-link>
      </div>
    </div>
    <img
      class="image2"
      src="https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt
    />
  </div>
</template>

<script>
import { loginUser } from "../api/utils";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        if (this.email === "" || this.password === "")
          throw Error("Datos vacios");
        await loginUser(this.email, this.password);

        //GUARDAR EL EMAIL EN LOCALSTORAGE
        localStorage.setItem("Usuario", this.email);

        //LLEVAR A LA PAGINA DE PRODUCTOS
        this.$router.push("/productos");
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>

<style scoped>
.login {
  margin: 1rem;
  padding: 1rem;
  height: 80vh;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  grid-template-rows: auto 1fr;
  gap: 0px;
  grid-template-areas: "head head head" "img1 box img2";
}

.loginBox {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 1rem;
  grid-area: box;
}
.image1 {
  grid-area: img1;
  height: 100%;
  width: 100%;
}

.image2 {
  grid-area: img2;
  height: 100%;
  width: 100%;
}

.title {
  grid-area: head;
}
h2 {
  margin-top: 0;
  color: white;
}
h1 {
  color: white;
}
img {
  height: 500px;
  width: 500px;
  border-radius: 20px;
}

input {
  width: 40%;
  align-self: center;
  margin: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
}

input:focus {
  outline: none;
}

button {
  width: 80px;
  cursor: pointer;
  text-align: center;
  color: white;
  background: #42b983;
  border: 2px solid #d6cdb6;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0.667rem;
  font-weight: bold;
}
button:hover {
  background-color: #008cba;
  color: white;
  border: 2px solid gray;
}
button:focus {
  outline: none;
}

a {
  color: #42b983;
  text-decoration: none;
}
@media (max-width: 600px) {
  .login {
    grid-template-areas: "head head head" "box box box";
  }

  .loginBox {
    background: url("https://images.unsplash.com/photo-1537476102677-80bac0ab1d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
      no-repeat center top fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-radius: 20px;
    text-shadow: 1px 1px black;
  }
  input {
    width: 60%;
    padding: 0.5rem;
  }
  img {
    display: none;
  }
  a {
    font-size: 1.15rem;
  }
}

@media (max-width: 1100px) {
  input {
    width: 60%;
    padding: 0.5rem;
  }
}
</style>

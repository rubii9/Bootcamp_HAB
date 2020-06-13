<template>
  <div class="register">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Register" description="Register page" />
    <h1 class="title">Bienvenido a mi tienda</h1>
    <img
      class="image1"
      src="https://images.unsplash.com/photo-1537476102677-80bac0ab1d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt
    />

    <div class="registerBox">
      <h2>Registrate</h2>
      <p v-show="required">Tienes datos sin completar</p>
      <p v-show="match">Las contraseñas no coinciden</p>
      <input type="email" name="email" v-model="email" placeholder="Email..." />
      <br />
      <input type="password" name="password" v-model="password" placeholder="Password..." />
      <br />
      <input
        type="password"
        name="password"
        v-model="repeatpassword"
        placeholder="Repeat password..."
      />
      <br />
      <div>
        <button @click="addUser(email, password)">Registro</button>
        <router-link :to="{ name: 'Login' }">Login</router-link>
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
import axios from "axios"; // Importando AXIOS
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      repeatpassword: "",
      correctData: false,
      required: false,
      match: false
    };
  },
  methods: {
    //COMPROBAR QUE LOS DATOS NO ESTÁN VACIOS
    validatingData() {
      if (this.email === "" || this.password === "") {
        this.correctData = false;
        this.required = true;
      } else if (this.password != this.repeatpassword) {
        this.match = true;
      } else {
        this.correctData = true;
        this.required = false;
        this.match = false;
      }
    },
    //AÑADIR NUEVO USUARIO A LA BBDD
    addUser(email, password) {
      this.validatingData();
      if (this.correctData == true) {
        let self = this;
        axios
          .post("http://localhost:3050/user", {
            email: self.email,
            password: self.password
          })
          .then(function(response) {
            self.emptyFields();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("No has rellenado todos los campos");
      }
    },
    //LIMPIAR CAMPOS INPUT
    emptyFields() {
      (this.email = ""), (this.password = "");
      //MENSAJE SWAL
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.register {
  padding: 1rem;
  height: 80vh;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  grid-template-rows: auto 1fr;
  gap: 0px;
  grid-template-areas: "head head head" "img1 box img2";
}

.registerBox {
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

p {
  color: red;
}
</style>

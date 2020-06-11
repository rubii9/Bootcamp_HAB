<template>
  <div>
    <h2>Registrate</h2>
    <p v-show="required">Tienes datos sin completar</p>
    <input type="email" name="email" v-model="email" placeholder="Email..." />
    <br />
    <input type="password" name="password" v-model="password" placeholder="Password..." />
    <br />
    <button @click="addUser(email,password)">Register</button>
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
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData() {
      if (this.email === "" || this.password === "") {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
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
    emptyFields() {
      (this.email = ""), (this.password = "");
      //MENSAJE SWAL
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>

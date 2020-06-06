<template>
  <div class="about">
    <vue-headful title="About" description="About page of me" />
    <menucustom></menucustom>
    <h1>¡Hey!👋</h1>
    <img src="../assets/img/ruben.jpg" alt />
    <div class="info">
      <p>
        This proyect has been created by
        <a
          href="https://www.linkedin.com/in/rub%C3%A9n-p%C3%A9rez-outeiral-8b4b041a0/"
          target="_blank"
          alt="link a mi linkedin"
        >Rubén Pérez</a>
      </p>
      <p>
        I made use of
        <a href="https://sweetalert2.github.io/" target="_blank">SweetAlert2</a>,
        <a href="https://www.npmjs.com/package/vue-headful" target="_blank">Vue-Headful</a>,
        <a href="https://loading.io/css/" target="_blank">CSS Loader Spiner</a>
        and data Api
        <a href="https://www.last.fm/api/?lang=es&" target="_blank">Last.fm</a>
      </p>

      <p>
        You can see the code on my github
        <a
          href="https://github.com/rubii9/Bootcamp_HAB/tree/master/Front-Vuejs/hackamusic"
          target="_blank"
        >Code</a>
      </p>

      <button @click="vote">Vote</button>
    </div>

    <footercustom></footercustom>
  </div>
</template>
<script>
//IMPORTANDO MENU
import menucustom from "../components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "../components/FooterCustom.vue";
// IMPORTANDO SWEETALERT2
import Swal from "sweetalert2";

export default {
  name: "About",
  components: { menucustom, footercustom },
  methods: {
    //MENSAJE ALERT DEL BOTÓN "VOTE"
    vote() {
      Swal.fire({
        title: "Do you like the web?",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "👍  Great!",
        cancelButtonText: "👎 Nah.."
      });
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
.about {
  min-height: 100vh;
  padding: 1rem;
  font-family: "Roboto";
  font-weight: 700;
  color: white;
  background: url("https://resistencia.es/wp-content/uploads/2018/10/music.png")
    no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.info {
  background-color: rgba(43, 39, 39, 0.5);
  width: 30%;
  margin: 0 auto;
}
a {
  color: #42b983;
  font-weight: 800;
}
img {
  border-radius: 50%;
  border: 3px solid #42b983;
  max-width: 200px;
  max-height: 200px;
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
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 0.5);
}
button:hover {
  background-color: #008cba;
  color: white;
  border: 2px solid gray;
}
button:focus {
  outline: none;
}
@media (max-width: 700px) {
  img {
    height: 120px;
    width: 120px;
    margin-top: 0.5rem;
  }
  p {
    font-size: 0.75rem;
  }
  .info {
    width: 50%;
  }
}
</style>

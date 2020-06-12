<template>
  <div class="about">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="About" description="About page of me" />

    <!-- MENU -->
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
        <a href="https://loading.io/css/" target="_blank">CSS Loader Spiner</a>,
        <a href="https://www.npmjs.com/package/express" target="_blank">Express</a>,
        <a href="https://www.npmjs.com/package/body-parser" target="_blank">BodyParser</a>,
        <a href="https://www.npmjs.com/package/cors" target="_blank">Cors</a>,
        <a href="https://www.npmjs.com/package/mysql" target="_blank">MySQL</a>
      </p>

      <p>
        You can see the code on my github
        <a
          href="https://github.com/rubii9/Bootcamp_HAB/tree/master/Front-Vuejs/hackamusic"
          target="_blank"
        >Code</a>
      </p>
    </div>

    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>
<script>
//IMPORTANDO MENU
import menucustom from "../components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "../components/FooterCustom.vue";

export default {
  name: "About",
  components: { menucustom, footercustom }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
.about {
  min-height: 100vh;
  /* font-family: "Roboto"; */
}
a {
  color: #42b983;
}
img {
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
}
</style>

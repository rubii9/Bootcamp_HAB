<template>
  <div class="about">
    <vue-headful title="About" description="About page of museum" />
    <!-- MENU -->
    <menucustom></menucustom>
    <h1>¡Hey!👋</h1>
    <img src="../assets/img/ruben.jpg" alt />
    <p>
      This proyect has been created by
      <a
        href="https://www.linkedin.com/in/rub%C3%A9n-p%C3%A9rez-outeiral-8b4b041a0/"
        target="_blank"
        alt="link a mi linkedin"
      >Rubén Pérez</a>
    </p>

    <p>
      You can see the code on my github
      <a
        href="https://github.com/rubii9/Bootcamp_HAB/tree/master/Front-Vuejs/repaso/hackamuseum"
        target="_blank"
      >Code</a>
    </p>
    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>
<script>
// @ is an alias to /src
// IMPORTANDO EL MENÚ
import menucustom from "@/components/MenuCustom.vue";
// IMPORTANDO EL FOOTER
import footercustom from "@/components/FooterCustom.vue";
export default {
  name: "Home",
  components: {
    menucustom,
    footercustom
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
.about {
  background: #404040;
  height: 100vh;
  margin: 0rem auto;
  color: white;
}
a {
  color: #42b983;
}
img {
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  align-self: center;
}
</style>

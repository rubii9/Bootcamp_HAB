<template>
  <div class="home">
    <vue-headful title="Home" description="Home page of museum" />

    <!-- MENU -->
    <menucustom></menucustom>

    <!-- TITLE  -->
    <h2 v-html="title"></h2>

    <!-- VIDEO  -->
    <iframe
      width="756"
      height="425"
      src="https://www.youtube.com/embed/t0wRme2HT9I"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <!--  DESCRPTION -->
    <p v-html="desc"></p>

    <!-- GALLERY LINKS -->
    <navgallerys></navgallerys>
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
// IMPORTANDO LINKS GALLERY
import navgallerys from "@/components/NavGallerys.vue";
export default {
  name: "Home",
  components: {
    menucustom,
    footercustom,
    navgallerys
  },
  data() {
    return {
      title: "Welcome to <br> HACK A MUSEUM",
      desc:
        "You can see some collections about statues on this museum. <br> We are searching for collabs."
    };
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
.home {
  background: #404040;
  margin: 0 auto;
  height: 100vh;
}
h2 {
  color: white;
  font-size: 3rem;
  margin: 0.5rem auto;
  font-family: "Dancing Script", cursive;
}
p {
  color: white;
}
</style>

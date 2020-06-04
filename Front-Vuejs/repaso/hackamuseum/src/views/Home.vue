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
    <div id="nav">
      <router-link :to="{ name: 'GreekGallery' }">⚜️ Greek Gallery</router-link>
      <router-link :to="{ name: 'OrientalGallery' }"
        >⚜️ Oriental Gallery</router-link
      >
      <router-link :to="{ name: 'RomanGallery' }">⚜️ Roman Gallery</router-link>
    </div>

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
    footercustom,
  },
  data() {
    return {
      title: "Welcome to <br> HACK A MUSEUM",
      desc:
        "You can see some collections about statues on this museum. <br> We are searching for collabs.",
    };
  },
};
</script>
<style scoped>
.home {
  background: #404040;
}
h2 {
  color: white;
}
p {
  color: white;
}
#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #42b983;
  margin: 0 0.25rem;
  text-decoration: none;
}
</style>

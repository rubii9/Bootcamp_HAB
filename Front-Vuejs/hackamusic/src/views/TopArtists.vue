<template>
  <div class="topArtists">
    <vue-headful
      title="Top Artists"
      description="Top artists list page of web"
    />
    <menucustom></menucustom>
    <artistlist :artists="artists"></artistlist>
    <footercustom></footercustom>
  </div>
</template>

<script>
//IMPORTANDO API
import api from "@/api/index.js";
//IMPORTANDO LISTA DE ARTISTAS
import artistlist from "../components/ArtistsList.vue";
//IMPORTANDO MENU
import menucustom from "../components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "../components/FooterCustom.vue";

export default {
  name: "TopArtists",
  components: { artistlist, menucustom, footercustom },
  data() {
    return {
      artists: [],
    };
  },
  created() {
    api.getArtists().then((response) => {
      this.artists = response.data.topartists.artist;
    });
  },
};
</script>

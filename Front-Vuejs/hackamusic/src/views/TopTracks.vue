<template>
  <div class="topTracks">
    <vue-headful title="Top Tracks" description="Top tracks list page of web" />
    <menucustom></menucustom>
    <trackslist :tracks="tracks"></trackslist>
    <footercustom></footercustom>
  </div>
</template>

<script>
//IMPORTANDO API
import api from "@/api/index.js";

//IMPORTANDO LISTA DE TRACKS
import trackslist from "../components/TracksList.vue";
//IMPORTANDO MENU
import menucustom from "../components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "../components/FooterCustom.vue";

export default {
  name: "TopTracks",
  components: { trackslist, menucustom, footercustom },
  data() {
    return {
      tracks: [],
    };
  },
  created() {
    api.getTopTracks().then((response) => {
      this.tracks = response.data.tracks.track;
    });
  },
};
</script>

<template>
  <div class="topArtists">
    <vue-headful
      title="Top Artists"
      description="Top artists list page of web"
    />
    <menucustom></menucustom>
    <h2>#Top artists 🎤</h2>
    <div class="searchArtist">
      <label for="bySearch">Search artist:</label>
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="Búsqueda..."
      />
    </div>
    <div v-show="loading" class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <artistlist :artists="filteredArtists"></artistlist>
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
      search: "",
      loading: true,
    };
  },
  created() {
    api.getArtists().then((response) => {
      this.artists = response.data.topartists.artist;
      this.loading = false;
      //ORDENAR POR OYENTES
      this.artists.sort(function(a, b) {
        return b.listeners - a.listeners;
      });
    });
  },
  computed: {
    filteredArtists() {
      if (!this.search) {
        return this.artists;
      }
      return this.artists.filter((artist) =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.topArtists {
  background: url("https://resistencia.es/wp-content/uploads/2018/10/music.png")
    no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 1rem;
}
h2 {
  font-size: 2rem;
  color: #ff6666;
  background-color: rgba(43, 39, 39, 0.5);
  border-radius: 20px;
  width: 250px;
  margin: 1rem auto;
}
.searchArtist {
  margin: 0 auto;
  padding: 0.5rem;
}

label {
  margin: 0.5rem;
}

input {
  border-radius: 20px;
  padding: 0.5rem;
}
input:focus {
  outline: none;
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: cadetblue;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

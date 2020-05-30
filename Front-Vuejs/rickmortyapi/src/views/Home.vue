<template>
  <div class="home">
    <!-- BARRA DE BUSQUEDA -->
    <header>
      <img class="logo" src="../assets/img/logo.svg" alt="logo" />
      <div class="search">
        <label for="bySearch">Search a character 👽:</label>
        <input v-model="search" id="search" name="bySearch" type="search" placeholder="Búsqueda..." />
      </div>
    </header>

    <!-- TARJETAS -->
    <CharCard :chars="filteredChars" class="tarjetas"></CharCard>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import CharCard from "@/components/CharCard.vue";
import FooterCustom from "@/components/FooterCustom.vue";

import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard,
    FooterCustom
  },
  data() {
    return {
      chars: [],
      search: ""
    };
  },
  computed: {
    filteredChars() {
      //SI NO ESCRIBIMOS NADA
      if (!this.search) {
        return this.chars;
      }
      //  FILTER PARA FILTRAR LAS BUSQUEDAS DEL ARRAY
      return this.chars.filter(
        char =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results));
    document.title = "Home|Rick&MortyApi";
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");
.tarjetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.logo {
  display: block;
}

.search {
  font-size: 1.25rem;
}
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Gloria Hallelujah", Arial, Helvetica, sans-serif;
}

input {
  margin: 1rem;
}
</style>

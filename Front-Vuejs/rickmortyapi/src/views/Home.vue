<template>
  <div class="home">
    <!-- BARRA DE BUSQUEDA -->
    <header>
      <img class="logo" src="../assets/img/logo.svg" alt="logo" />
      <div class="search">
        <label for="bySearch">Search a character 👽:</label>
        <input v-model="search" id="search" name="bySearch" type="search" placeholder="Search..." />

        <input
          v-model="id"
          id="searchChar"
          name="bySearchId"
          type="search"
          placeholder="Write charcater id"
        />
        <button @click="searchChar(id),seeAll=false, seeID=true">Search by ID</button>
        <button @click="seeID=false,seeAll=true">See all</button>
      </div>
    </header>

    <!-- TARJETA ID -->
    <CharCardID :char="char" class="tajetaID" v-show="seeID"></CharCardID>
    <!-- TARJETAS -->
    <CharCard :chars="filteredChars" class="tarjetas" v-show="seeAll"></CharCard>

    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import CharCard from "@/components/CharCard.vue";
import CharCardID from "@/components/CharCardID.vue";

import FooterCustom from "@/components/FooterCustom.vue";

import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard,
    FooterCustom,
    CharCardID
  },
  data() {
    return {
      chars: [],
      search: "",
      char: {},
      id: null,
      seeAll: true,
      seeID: true
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
  methods: {
    searchChar(id) {
      api.getChar(id).then(response => (this.char = response.data));
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
  margin: 2rem;
}
header {
  display: flex;
  flex-direction: column;
  font-family: "Gloria Hallelujah", Arial, Helvetica, sans-serif;
}

input {
  margin: 1rem;
}

button {
  margin: 0 0.5rem;
}
@media (max-width: 700px) {
  header {
    padding: 0.5rem;
  }
  input {
    margin: 0 auto;
    padding: 0;
    font-size: 0.75rem;
  }

  button {
    font-size: 0.75rem;
  }
}
</style>

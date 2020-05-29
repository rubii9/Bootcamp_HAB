<template>
  <div class="home">
    <header>
      <h1>
        Rick & Morty
      </h1>
    </header>

    <CharCard
      v-for="char in chars"
      :key="char.id"
      :charName="char.name"
      :charStatus="char.status"
      :charGender="char.gender"
      :charImage="char.image"
      :charOrigin="char.origin.name"
      :charSpecie="char.species"
      :charId="char.id"
    ></CharCard>
  </div>
</template>

<script>
// @ is an alias to /src
import CharCard from "@/components/CharCard.vue";
//IMPORTANDO LA CONFIG API
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard,
  },
  data() {
    return {
      chars: [],
    };
  },
  created() {
    api
      .getAll()
      .then(
        (response) => (
          (this.chars = response.data.results),
          console.log(response.data.results)
        )
      );
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
header {
  width: 100%;
}
h1 {
  font-family: "Gloria Hallelujah";
  margin: 1rem auto;
  width: 30%;
  font-size: 5rem;
  color: #339966;
}
</style>

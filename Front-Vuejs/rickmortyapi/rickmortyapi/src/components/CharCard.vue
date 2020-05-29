<template>
  <div class="card">
    <ul>
      <li>
        <h2>{{ charName }}</h2>
      </li>
      <li>
        <img :src="charImage" alt="imagen de personaje" />
      </li>
      <li>ID: {{ charId }}</li>
      <li>Status: {{ charStatus }}</li>
      <li>Gender: {{ charGender }}</li>
      <li>Origin: {{ charOrigin }}</li>
      <li>Specie: {{ charSpecie }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    charName: String,
    charId: Number,
    charStatus: String,
    charGender: String,
    charImage: String,
    charOrigin: String,
    charSpecie: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");
.card {
  width: 30%;
  border: 1px solid black;
  border-radius: 10%;
  margin: 1rem;
  background-color: #666666;
  color: white;
}
h2 {
  font-size: 2.5rem;
  color: white;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul > li {
  margin: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  font-family: "Gloria Hallelujah";
}
ul > li > img {
  border-radius: 50%;
  border: 2px solid white;
}
</style>

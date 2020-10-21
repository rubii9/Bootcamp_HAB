<template>
  <div>
    <!-- TARJETA DE PERSONAJE -->
    <h1>Character with id: {{char.id}}</h1>

    <div class="cardID">
      <header>
        <img :src="char.image" alt />
        <h2>{{ char.name }}</h2>
      </header>
      <p>
        <strong>id:</strong>
        {{char.id}}
      </p>
      <p
        :class="{ green: char.status === 'Alive', red: char.status === 'Dead', orange: char.status === 'unknown' }"
      >
        <strong>Status:</strong>
        {{char.status}}
      </p>
      <p>
        <strong>Specie:</strong>
        {{char.species}}
      </p>
      <p>
        <strong>Gender:</strong>
        {{char.gender}}
      </p>
      <p>
        <strong>Origin:</strong>
        {{char.origin.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCardID",
  props: {
    char: Object
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");
.cardID {
  border: 1px solid aqua;
  border-radius: 5%;
  margin: 0 auto;
  padding: 1rem;
  background-color: #666666;
  color: aqua;
  min-width: 400px;
  max-width: 400px;
  font-family: "Gloria Hallelujah", Arial, Helvetica, sans-serif;
}
.green {
  color: greenyellow;
}
.red {
  color: red;
}
.orange {
  color: orange;
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
}
header h2 {
  color: aqua;
  font-size: 1.75rem;
  padding: 0;
}
p {
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 800;
  color: white;
}

strong {
  color: aqua;
}
img {
  border-radius: 50%;
  border: 2px solid white;
  height: 200px;
  width: 200px;
  align-self: center;
}

@media (max-width: 700px) {
  .cardID {
    min-width: 200px;
    max-width: 200px;
  }
  h1 {
    font-size: 1.25rem;
    font-family: "Gloria Hallelujah", Arial, Helvetica, sans-serif;
  }
  header h2 {
    color: aqua;
    font-size: 1.2rem;
    padding: 0;
  }
  p {
    margin: 0 1rem;
    font-size: 0.75rem;
    font-weight: 800;
    color: white;
  }

  img {
    border-radius: 50%;
    border: 2px solid white;
    height: 80px;
    width: 80px;
  }
}
</style>

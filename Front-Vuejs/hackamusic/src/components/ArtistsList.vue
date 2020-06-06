<template>
  <div class="artists">
    <ul>
      <li v-for="artist in artists" :key="artist.id">
        <section class="artist">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <p>
            <a :href="artist.url">{{ artist.name }}</a>
          </p>
          <p>
            <strong>Listeners:</strong>
            {{ artist.listeners }}
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArtistList",
  props: {
    artists: Array,
  },
};
</script>

<style scoped>
.artists {
  margin: 0 auto;
  padding: 0rem;
}

ul {
  list-style: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
li {
  width: 20%;
  border: 1px solid wheat;
  border-radius: 20px;
  box-shadow: 3px 3px 10px white;
  margin: 1rem;
  padding: 1rem;
  background-color: rgba(43, 39, 39, 0.5);
}
a {
  color: #42b983;
  margin: 0.5rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: bold;
}
img {
  border-radius: 20px;
  height: 170px;
  width: 170px;
}
@media (max-width: 700px) {
  li {
    width: 60%;
    padding: 0.5rem;
  }
  img {
    height: 120px;
    width: 120px;
    margin-top: 0.5rem;
  }
  p {
    font-size: 0.75rem;
  }
}
</style>

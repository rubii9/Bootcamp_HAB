<template>
  <div class="tracks">
    <ul>
      <li v-for="(track, index) in tracks" :key="track.id">
        <section class="tracks">
          <p>
            <img
              src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </p>
          <p class="rank">#{{ index + 1 }}</p>
          <p>
            <a :href="track.url">{{ track.name }}</a>
          </p>
          <p>
            <strong>Artist:</strong>
            <a :href="track.artist.url" class="trackArtist">{{
              track.artist.name
            }}</a>
          </p>
          <p>
            <strong>Listeners:</strong>
            {{ track.listeners }}
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
    tracks: Array,
  },
};
</script>

<style scoped>
.artist {
  margin: 0 auto;
  padding: 0rem;
}

.rank {
  font-size: 1.5rem;
  margin: 0;
}

.trackArtist {
  font-size: 1rem;
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
  width: 25%;
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
  font-size: 1.25rem;
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
  a {
    font-size: 1.1rem;
  }
  .trackArtist {
    font-size: 0.85rem;
  }
  p {
    font-size: 0.75rem;
  }
}
</style>

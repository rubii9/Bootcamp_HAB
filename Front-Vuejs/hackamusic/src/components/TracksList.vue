<template>
  <div>
    <ul>
      <li v-for="(track, index) in tracks" :key="track.id">
        <section class="tracks">
          <p>
            <img :src="track.image[2]['#text']" />
          </p>
          <p>
            <strong>Rank:</strong>
            {{index +1}}
          </p>
          <p>
            <strong>Name:</strong>
            <a :href="track.url">{{track.name}}</a>
          </p>
          <p>
            <strong>Artist:</strong>
            {{track.artist.name}}
          </p>
          <p>
            <strong>Listeners:</strong>
            {{track.listeners}}
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
    tracks: Array
  }
};
</script>

<style scoped>
</style>
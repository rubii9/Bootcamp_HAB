<template>
  <div>
    <ul>
      <li v-for="(artist, index) in artists" :key="artist.id">
        <section class="artist">
          <img :src="artist.image[2]['#text']" />
          <p>
            <strong>Rank:</strong>
            {{index +1}}
          </p>
          <p>
            <strong>Name:</strong>
            <a :href="artist.url">{{artist.name}}</a>
          </p>
          <p>
            <strong>Oyentes:</strong>
            {{artist.listeners}}
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
    artists: Array
  }
};
</script>

<style scoped>
</style>
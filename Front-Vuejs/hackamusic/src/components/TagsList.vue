<template>
  <div class="tags">
    <ul>
      <li v-for="(tag, index) in tags" :key="tag.id">
        <section class="tags">
          <p>
            <strong>Rank:</strong>
            {{ index + 1 }}
          </p>
          <p>
            <strong>Name:</strong>
            <a :href="tag.url">{{ tag.name }}</a>
          </p>
          <p>
            <strong>Taggings:</strong>
            {{ tag.taggings }}
          </p>
          <p>
            <strong>Reach:</strong>
            {{ tag.reach }}
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
    tags: Array,
  },
};
</script>

<style scoped>
.tags {
  margin: 0 auto;
  padding: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  width: 20%;
  border: 1px solid white;
  border-radius: 20px;
  margin: 1rem auto;
}
</style>

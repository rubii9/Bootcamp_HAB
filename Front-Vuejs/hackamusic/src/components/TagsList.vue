<template>
  <div class="tags">
    <ul>
      <li v-for="(tag, index) in tags" :key="tag.id">
        <section class="tags">
          <p class="rank">#{{ index + 1 }}</p>
          <p>
            <a :href="tag.url" target="_blank">{{ tag.name }}</a>
          </p>
          <p>
            <strong>Taggings:</strong>
            {{ tag.taggings }}
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
  padding: 0rem;
}
.rank {
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  padding: 1rem;
}
li {
  width: 10%;
  border: 1px solid wheat;
  border-radius: 20px;
  box-shadow: 3px 3px 10px #ff6666;
  margin: 1rem auto;
  background-color: rgba(43, 39, 39, 0.5);
}
a {
  color: #42b983;
  margin: 0.5rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: bold;
}

@media (max-width: 700px) {
  li {
    width: 60%;
    padding: 0.5rem;
  }
}
</style>

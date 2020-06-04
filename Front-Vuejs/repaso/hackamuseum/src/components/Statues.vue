<template>
  <div>
    <!-- IMAGES COLLECTION -->
    <div class="statues">
      <div v-for="item in Statues" class="statue" :key="item.id">
        <p>
          <img :src="item.urlImage" :alt="item.name" />
        </p>
        <p>{{item.photographer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statues",
  props: {
    Statues: Array
  }
};
</script>

<style scoped>
.statues {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-bottom: 3rem;
}
.statue img {
  margin: 1rem;
  height: 400px;
  max-width: 400px;
}
</style>
<template>
  <div>
    <!-- IMAGES COLLECTION -->
    <div class="statues">
      <div v-for="item in Statues" class="statue" :key="item.id">
        <p>{{item.name}}</p>
        <p>{{item.photographer}}</p>
        <p>
          <img :src="item.urlImage" :alt="item.name" />
        </p>
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
</style>
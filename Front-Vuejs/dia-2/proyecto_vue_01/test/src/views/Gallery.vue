<template>
  <div class="about">
    <MenuCustom></MenuCustom>
    <h1>Bienvenid@ a la galería de Arte</h1>
    <img
      src="https://images.unsplash.com/photo-1588783948922-d2f155b13c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
      alt="imagen random"
    />
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "Gallery",
  components: {
    MenuCustom,
    FooterCustom,
  },
};
</script>

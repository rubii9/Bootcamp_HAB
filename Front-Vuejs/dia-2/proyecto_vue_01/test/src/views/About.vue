<template>
  <div class="about">
    <MenuCustom></MenuCustom>
    <h1>This is an about page</h1>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "About",
  components: {
    MenuCustom,
    FooterCustom,
  },
};
</script>

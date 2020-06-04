<template>
  <div class="about">
    <vue-headful title="About" description="About page of museum" />
    <!-- MENU -->
    <menucustom></menucustom>
    <h1>This is an about page</h1>
    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>
<script>
// @ is an alias to /src
// IMPORTANDO EL MENÚ
import menucustom from "@/components/MenuCustom.vue";
// IMPORTANDO EL FOOTER
import footercustom from "@/components/FooterCustom.vue";
export default {
  name: "Home",
  components: {
    menucustom,
    footercustom,
  },
};
</script>

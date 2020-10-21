<template>
  <div class="roman">
    <vue-headful title="RomanGallery" description="Roman Gallery page of museum" />
    <!-- MENU -->
    <menucustom class="menu"></menucustom>
    <navgallerys class="nav"></navgallerys>
    <!-- ROMAN COLLECTION -->
    <titlegallery :title="title"></titlegallery>
    <statues :statues="romanStatues"></statues>

    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// IMPORTANDO EL MENÚ
import menucustom from "@/components/MenuCustom.vue";
// IMPORTANDO EL FOOTER
import footercustom from "@/components/FooterCustom.vue";
// IMPORTANDO PLANTILA STATUES
import statues from "@/components/Statues.vue";
// IMPORTANDO TITLE COLLECTION
import titlegallery from "@/components/TitleGallery.vue";
// IMPORTANDO LINKS GALLERY
import navgallerys from "@/components/NavGallerys.vue";

export default {
  name: "RomanGallery",
  components: {
    menucustom,
    footercustom,
    statues,
    titlegallery,
    navgallerys
  },
  data() {
    return {
      title: "ROMAN COLLECTION 🎭",
      romanStatues: [
        {
          name: "Statue 1",
          photographer: "Mary Shelly 📷",
          urlImage:
            "https://images.unsplash.com/photo-1559672749-510941093805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 2",
          photographer: "Peter Pan 📷",
          urlImage:
            "https://images.unsplash.com/photo-1550798486-f63ffaec5760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 3",
          photographer: "Joe Macfly 📷",
          urlImage:
            "https://images.unsplash.com/photo-1589882168956-18c3a3a45c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 4",
          photographer: "Deisy Malone 📷",
          urlImage:
            "https://images.unsplash.com/photo-1567494472396-879c8909a768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        }
      ]
    };
  }
};
</script>

<style scoped>
.roman {
  background: #404040;
  color: white;
  display: flex;
  flex-direction: column;
}
.menu {
  align-self: flex-end;
}
</style>

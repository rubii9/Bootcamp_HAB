<template>
  <div class="oriental">
    <vue-headful title="OrientalGallery" description="Oriental Gallery page of museum" />
    <!-- MENU -->
    <menucustom class="menu"></menucustom>
    <navgallerys class="nav"></navgallerys>

    <!-- ORIENTAL COLLECTION -->
    <titlegallery :title="title"></titlegallery>
    <statues :statues="orientalStatues"></statues>

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
      title: "ORIENTAL COLLECTION 🎭",
      orientalStatues: [
        {
          name: "Statue 1",
          photographer: "Mary Shelly 📷",
          urlImage:
            "https://images.unsplash.com/photo-1533552755457-5b471cb2ab11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 2",
          photographer: "Peter Pan 📷",
          urlImage:
            "https://images.unsplash.com/photo-1441814849630-e47ec6cced58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 3",
          photographer: "Joe Macfly 📷",
          urlImage:
            "https://images.unsplash.com/photo-1444194563460-454833ba6005?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 4",
          photographer: "Deisy Malone 📷",
          urlImage:
            "https://images.unsplash.com/photo-1546578881-7daee02e6e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        }
      ]
    };
  }
};
</script>

<style scoped>
.oriental {
  background: #404040;
  color: white;
  display: flex;
  flex-direction: column;
}
.menu {
  align-self: flex-end;
}
</style>

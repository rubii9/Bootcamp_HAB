<template>
  <div class="greek">
    <vue-headful title="GreekGallery" description="Greek Gallery page of museum" />

    <!-- MENU -->
    <menucustom></menucustom>

    <!-- GREEK COLLECTION -->
    <titlegallery :title="title"></titlegallery>
    <statues :statues="greekStatues"></statues>

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

export default {
  name: "GreekGallery",
  components: {
    menucustom,
    footercustom,
    statues,
    titlegallery
  },
  data() {
    return {
      title: "⚜️ GREEK COLLECTION 🎭",
      greekStatues: [
        {
          name: "Statue 1",
          photographer: "Mary Shelly 📷",
          urlImage:
            "https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 2",
          photographer: "Peter Pan 📷",
          urlImage:
            "https://images.unsplash.com/photo-1574352067721-72d5913bd35c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 3",
          photographer: "Joe Macfly 📷",
          urlImage:
            "https://images.unsplash.com/photo-1533800790978-ab520ae73a68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          name: "Statue 4",
          photographer: "Deisy Malone 📷",
          urlImage:
            "https://images.unsplash.com/photo-1554533899-787ef890e98f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        }
      ]
    };
  }
};
</script>

<style scoped>
.greek {
  background: #404040;
  color: white;
}
</style>

<template>
  <div class="home">
    <vue-headful title="Home" description="Home page of web" />
    <menucustom></menucustom>
    <tagslist :tags="tags"></tagslist>
    <footercustom></footercustom>
  </div>
</template>

<script>
//IMPORTANDO API
import api from "@/api/index.js";

//IMPORTANDO LISTA DE TAGS
import tagslist from "../components/TagsList.vue";
//IMPORTANDO MENU
import menucustom from "../components/MenuCustom.vue";
//IMPORTANDO FOOTER
import footercustom from "../components/FooterCustom.vue";

export default {
  name: "Home",
  components: { tagslist, menucustom, footercustom },
  data() {
    return {
      tags: [],
    };
  },
  created() {
    api.getTopTags().then((response) => {
      this.tags = response.data.tags.tag;
    });
  },
};
</script>

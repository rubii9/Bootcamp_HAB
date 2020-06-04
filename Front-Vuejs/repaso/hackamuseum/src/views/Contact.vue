<template>
  <div>
    <vue-headful title="Contact" description="Contact page of museum" />

    <!-- MENU -->
    <menucustom></menucustom>

    <!-- FORMULARIO -->
    <form>
      <label for="name">Nombre</label>
      <br />
      <input type="text" name="name" placeholder="Your name.." />
      <br />
      <label for="subject">Subject</label>
      <br />
      <input type="subject" name="subject" placeholder="Subject.." />
      <br />
      <label for="textarea">Your message</label>
      <br />
      <textarea name="textarea" id="textarea" cols="50" rows="4"></textarea>
      <br />
      <button>Cancel</button>
      <button>Send</button>
    </form>

    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// IMPORTANDO EL MENÚ
import menucustom from "@/components/MenuCustom.vue";
// IMPORTANDO EL FOOTER
import footercustom from "@/components/FooterCustom.vue";
export default {
  name: "Contact",
  components: {
    menucustom,
    footercustom,
  },
};
</script>

<style scoped></style>

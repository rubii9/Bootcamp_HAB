<template>
  <div class="contact">
    <vue-headful title="Contact" description="Contact page of museum" />

    <!-- MENU -->
    <menucustom></menucustom>

    <!-- FORMULARIO -->
    <contacform v-on:send="send" v-on:cancel="cancel"></contacform>

    <!-- FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// IMPORTANDO EL MENÚ
import menucustom from "@/components/MenuCustom.vue";
// IMPORTANDO EL FOOTER
import footercustom from "@/components/FooterCustom.vue";
// IMPORTANDO EL FORMULARIO
import contacform from "@/components/ContactForm.vue";
// IMPORTANDO SWEETALERT2
import Swal from "sweetalert2";
export default {
  name: "Contact",
  components: {
    menucustom,
    footercustom,
    contacform,
  },
  methods: {
    send() {
      Swal.fire({
        title: "Your message was sent",
        text: "Thanks for your support",
        confirmButtonText: "ok",
      });
    },
    cancel() {
      Swal.fire({
        title: "Your message was cancelled",
        text: "You can try it later",
        confirmButtonText: "ok",
      });
    },
  },
};
</script>

<style scoped>
.contact {
  background: #404040;
  color: white;
}
</style>

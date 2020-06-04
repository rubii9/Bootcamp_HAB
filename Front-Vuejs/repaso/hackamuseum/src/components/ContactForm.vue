<template>
  <div>
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
      <button @click="cancelEvent">Cancel</button>
      <button @click="sendEvent">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  methods: {
    sendEvent() {
      this.$emit("send");
    },
    cancelEvent() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
</style>
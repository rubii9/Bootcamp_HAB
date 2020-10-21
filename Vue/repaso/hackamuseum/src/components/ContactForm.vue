<template>
  <div>
    <form>
      <label for="name">NAME</label>

      <input type="text" name="name" placeholder="Your name.." />

      <label for="subject">SUBJET</label>

      <input type="subject" name="subject" placeholder="Subject.." />

      <label for="textarea">MESSAGE</label>

      <textarea name="textarea" id="textarea" cols="50" rows="4" placeholder="Your message..."></textarea>

      <div class="buttons">
        <button class="cancel" @click="cancelEvent">Cancel</button>
        <button class="send" @click="sendEvent">Send</button>
      </div>
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
* {
  box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 30%;
}
label {
  text-align: left;
  margin: 0.25rem 0;
}
input,
textarea {
  padding: 0.5rem;
  margin: 0.25rem 0;
  border: 1px solid gray;
  border-radius: 20px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0;
}

.send {
  background: #42b983;
}
.cancel {
  background: gray;
}

button {
  width: 20%;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  color: white;
  border: 2px solid #d6cdb6;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0.667rem;
  font-weight: bold;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 0.5);
}
button:hover {
  background-color: #008cba;
  color: white;
  border: 2px solid gray;
}
button:focus {
  outline: none;
}
</style>
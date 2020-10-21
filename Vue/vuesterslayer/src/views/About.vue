<template>
  <div class="about">
    <h1>¡Hey!👋</h1>
    <img src="../assets/img/ruben.jpg" alt />
    <p>
      This proyect has been created by
      <a
        href="https://www.linkedin.com/in/rub%C3%A9n-p%C3%A9rez-outeiral-8b4b041a0/"
        alt="link a mi linkedin"
      >Rubén Pérez</a>
    </p>

    <p>
      You can see the code on my github
      <a
        href="https://github.com/rubii9/Bootcamp_HAB/tree/master/Front-Vuejs/vuesterslayer"
      >Code</a>
    </p>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import FooterCustom from "@/components/FooterCustom.vue";
export default {
  name: "About",
  components: { FooterCustom },
  created() {
    document.title = "About|DefeatEnemy";
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
.about {
  min-height: 100vh;
  font-family: "Roboto";
  color: white;
}
a {
  color: #42b983;
}
img {
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
}
</style>

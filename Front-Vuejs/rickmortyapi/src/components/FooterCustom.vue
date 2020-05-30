<template>
  <div>
    <footer class="footer">
      <nav>
        <p>
          <img src="../assets/img/linkedin.png" alt="icono linkedin" />
          <a href>Rubén Pérez</a>
        </p>
        <p>
          <img src="../assets/img/instagram.png" alt="icono instagram" />
          <a href="https://www.instagram.com/rubii__9/">Rubii__9</a>
        </p>
        <p>
          <img src="../assets/img/github.png" alt="icono github" />
          <a href="https://github.com/rubii9">Rubii9</a>
        </p>
      </nav>
      <p>@Hackaboss 2020</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer p {
  text-align: center;
  padding: 1rem;
}

img {
  height: 30px;
  width: 30px;
  display: inline-block;
  align-self: center;
  margin: 0.5rem;
}

nav p {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  min-width: 130px;
}
nav p a {
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  align-self: center;
}

nav {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
}
</style>
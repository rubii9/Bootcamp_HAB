<template>
  <div>
    <footer class="footer">
      <nav>
        <p>
          <img src="../assets/img/linkedin.png" alt="icono linkedin" />
          <a
            href="https://www.linkedin.com/in/rub%C3%A9n-p%C3%A9rez-outeiral-8b4b041a0/"
            target="_blank"
            >Rubén Pérez</a
          >
        </p>
        <p>
          <img src="../assets/img/instagram.png" alt="icono instagram" />
          <a href="https://www.instagram.com/rubii__9/" target="_blank"
            >Rubii__9</a
          >
        </p>
        <p>
          <img src="../assets/img/github.png" alt="icono github" />
          <a href="https://github.com/rubii9" target="_blank">Rubii9</a>
        </p>
      </nav>
      <p>@Hackaboss 2020</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom",
  data() {
    return {
      copyright: "Rubén Pérez, 2020-2021",
    };
  },
};
</script>

<style scoped>
.footer {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: white;
}
.footer p {
  text-align: center;
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
  align-self: center;
  justify-content: center;
  margin: 0.5rem;
  width: 100px;
}
nav p a {
  color: #2c3e50;
  text-decoration: none;
  display: inline-block;
  color: #42b983;
  margin: 0;
}

nav {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}

footer > p {
  margin: 1rem;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 700px) {
  img {
    height: 20px;
    width: 20px;
    margin: 0.5rem;
  }
  nav p a {
    font-size: 0.75rem;
  }

  nav p {
    width: auto;
  }

  footer > p {
    font-size: 0.75rem;
  }
}</style
>>

<template>
  <div class="home">
    <Presentacion :saludo="title"> </Presentacion>
    <TablaProductos :productos="productos"></TablaProductos>
    <MenuCustom></MenuCustom>
    <Contador
      :counter="counter"
      v-on:increase="increase()"
      v-on:decrease="decrease()"
    ></Contador>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import Presentacion from "@/components/Presentacion.vue";
import Contador from "@/components/Contador.vue";
import TablaProductos from "@/components/TablaProductos.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MenuCustom,
    FooterCustom,
    Presentacion,
    Contador,
    TablaProductos,
  },
  data() {
    return {
      title: "Hola, estás en el Home",
      counter: 0,
      productos: [
        { name: "Fruta", estado: 0 },
        { name: "Ropa", estado: 1 },
        { name: "Lejia", estado: 0 },
      ],
    };
  },

  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  beforeCreate() {
    console.log("Hook Before Create");
  },
  created() {
    console.log("Hook Created");
  },
  beforeMount() {
    console.log("Hook Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
};
</script>

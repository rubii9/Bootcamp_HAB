import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/add-client",
    name: "AddClient",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddClient.vue"),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
  },
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

//COMPROBANDO CADA PÁGINA SI EL USER ESTÁ LOGEADA
router.beforeEach((to, from, next) => {
  //Si la ruta privada y la persona no tiene token
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  }
  if (to.meta.allowNoAdmin === false && !checkAdmin()) {
    next({
      path: "/home",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;

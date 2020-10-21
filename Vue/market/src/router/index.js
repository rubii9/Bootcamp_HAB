import Vue from "vue";
import VueRouter from "vue-router";
import Error from "../views/Error.vue";
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Clientes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Clientes.vue"),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        Swal.fire({
          title: "Acceso denegado",
          text: "Solo para admin",
          confirmButtonText: "Ok",
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: true,
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
    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        Swal.fire({
          title: "Acceso denegado",
          text: "Solo para admin",
          confirmButtonText: "Ok",
        });
      } else {
        next();
      }
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
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/productos",
    name: "Productos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Productos.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "*",
    name: Error,
    component: Error,
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
  } else {
    next();
  }
});

export default router;

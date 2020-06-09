import Vue from "vue";
import VueRouter from "vue-router";
import Notas from "../views/Notas.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Notas",
    component: Notas,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Error",
    component: Error,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/greek-gallery",
    name: "GreekGallery",
    component: () => import("../views/GreekGallery.vue"),
  },
  {
    path: "/roman-gallery",
    name: "RomanGallery",
    component: () => import("../views/RomanGallery.vue"),
  },
  {
    path: "/oriental-gallery",
    name: "OrientalGallery",
    component: () => import("../views/OrientalGallery.vue"),
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

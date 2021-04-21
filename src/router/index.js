import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Oskar from "../views/Oskar.vue";
import John from "../views/John.vue";
import Ivy from "../views/Ivy.vue";
import Josef from "../views/Josef.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/oskar",
    name: "Oskar",
    component: Oskar,
  },
  {
    path: "/john",
    name: "John",
    component: John,
  },
  {
    path: "/ivy",
    name: "Ivy",
    component: Ivy,
  },
  {
    path: "/josef",
    name: "Josef",
    component: Josef,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import Authentification from "./views/Authentification.vue";
import Messages from "./views/Messages.vue";
import Articles from "./views/Articles.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/articles",
      name: "articles",
      component: Articles
    },
    {
      path: "/",
      name: "authentification",
      component: Authentification
    },
    {
      path: "/messages",
      name: "messages",
      component: Messages
    }
  ]
});

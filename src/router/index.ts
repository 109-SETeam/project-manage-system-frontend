import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/views/Login.vue"
import Project from "@/views/Project.vue"
import GithubAuthorize from "@/components/GithubAuthorize.vue"
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) next({ name: 'Project' })
      else next()
    }
  },
  {
    path: "/oauth-callback/github",
    component: GithubAuthorize
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) next({ name: 'Login' })
      else next()
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/Signup.vue";
import headerBar from "@/components/header.vue";
import sidebar from "./components/sidebar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      components: {
        default: Dashboard,
        header: headerBar,
        sidebar: sidebar
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
});


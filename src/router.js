import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/Signup.vue";
import ResetPassword from "./views/ResetPassword.vue";
import headerBar from "@/components/header.vue";
import sidebar from "./components/sidebar.vue";
import Firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
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
      path: "/reset-password",
      name: "reset-password",
      component: ResetPassword
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
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("/login");
  else if (!requiresAuth && currentUser) next("/dashboard");
  else next();
});

export default router;

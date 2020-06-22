import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Create from "./components/Create.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: Home,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requireLogin: true,
      },
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.requireLogin);
  if (!user && authRequired) {
    next("login");
  } /* else if (user && !authRequired) {
    next("home");
  }  */ else {
    next();
  }
});

export default router;
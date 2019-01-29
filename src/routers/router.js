import Home from "@/views/Home.vue";

const homeRouter = {
  path: "/",
  name: "home",
  component: Home
};

const aboutRouter = {
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
};

export const routers = [homeRouter, aboutRouter];

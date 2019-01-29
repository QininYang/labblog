import Main from "@/views/Main.vue";

const homeRouter = {
  path: "/",
  name: "home",
  component: Main
};

const aboutRouter = {
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
};

//can't use routers
export const routes = [homeRouter, aboutRouter];

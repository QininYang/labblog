import Home from '@/views/Home.vue'

const homeRouter = {
  path: '/',
  name: 'root',
  redirect: '/home',
  component: Home,
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/Main.vue')
    },
    {
      path: 'people',
      name: 'people',
      component: () => import('@/views/People.vue')
    },
    {
      path: 'articles',
      name: 'articles',
      component: () => import('@/views/Articles.vue')
    },
    {
      path: 'teaching',
      name: 'teaching',
      component: () => import('@/views/Teaching.vue')
    }
  ]
}

const aboutRouter = {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
}

//can't use routers
export const routes = [homeRouter, aboutRouter]

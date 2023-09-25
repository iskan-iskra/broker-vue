import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ErrorView from '@/views/ErrorView.vue'
export enum RouterPath {
  HomePage = "/",
  About = "/about",
  Error = '/404'
}

export enum RouterName {
  HomePage = 'home',
  About = 'about',
  Error = 'error'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouterPath.HomePage,
      name: RouterName.HomePage,
      component: HomeView
    },
    {
      path: RouterPath.About,
      name: RouterName.About,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: RouterPath.Error,
      name: RouterName.Error,
      component: ErrorView
    },

    {
      path: "/:catchAll(.*)",
      redirect: RouterPath.Error
    }
  ]
})

export default router

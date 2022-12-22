import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import ContactView from '../views/ContactView.vue'

import FreeView from '../views/solutions/FreeView.vue'
import HologramView from '../views/solutions/HologramView.vue'
import MetaView from '../views/solutions/MetaView.vue'
import AvatarView from '../views/solutions/AvatarView.vue'
import CinemaView from '../views/solutions/CinemaView.vue'
import WebView from '../views/solutions/WebView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/solutions',
      children: [
        { path: '', component: () => import('../views/SolutionsView.vue') },
        { path: '1', component: SolutionsView,
          beforeEnter() { window.open('http://aichronus.com','_blank') } },
        { path: '2', component: () => import('../views/solutions/FreeView.vue') },
        { path: '3', component: () => import('../views/solutions/HologramView.vue') },
        { path: '4', component: () => import('../views/solutions/MetaView.vue') },
        { path: '5', component: () => import('../views/solutions/AvatarView.vue') },
        { path: '6', component: () => import('../views/solutions/CinemaView.vue') },
        { path: '7', component: () => import('../views/solutions/WebView.vue') },
      ],
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: "/:catchAll(.*)",
      component: () => import('../views/HomeView.vue')
    },
  ],
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router

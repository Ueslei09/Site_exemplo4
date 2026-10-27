import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../module/home/views/HomeView.vue'
import AboutSection from '../module/home/components/AboutSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
    path: '/sobre',
    name: 'about',
    component: AboutSection
  },

  ],
})

export default router

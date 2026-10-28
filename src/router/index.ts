import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../module/home/views/HomeView.vue'
import AboutSection from '../module/home/components/AboutSection.vue'
import AgendaSection from '../module/home/components/AgendaSection.vue'
import DiscographySection from '@/module/home/components/DiscographySection.vue'

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
  {
  path: '/agenda',
  name: 'Agenda',
  component: AgendaSection
},
{
  path: '/discografia',
  name: 'Discografia',
  component: DiscographySection
}

  ],
})

export default router

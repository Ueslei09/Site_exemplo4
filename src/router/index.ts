import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../module/home/views/HomeView.vue'
import AboutSection from '../module/home/components/AboutSection.vue'
import AgendaSection from '../module/home/components/AgendaSection.vue'
import DiscographySection from '../module/home/components/DiscographySection.vue'
import PhotoDetailView from '../module/home/components/PhotoDetailView.vue'
import PhotosView from '../module/home/components/PhotosView.vue'
import NewsSection from '../module/home/components/NewsSection.vue'

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
},
{
  path: '/fotos',
  name: 'photos',
  component: PhotosView
},
{
  path: '/fotos/:id',
  name: 'photo-detail',
  component: PhotoDetailView
},
{
path: '/noticias',
    name: 'noticias',
    component: NewsSection,
  }

  ],
})

export default router

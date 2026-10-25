// src/modules/home/composables/useHome.js
import { ref } from 'vue'
import { getHomeData } from '../services/homeService'

export function useHome() {
  const homeData = ref(getHomeData())

  return {
    homeData
  }
}
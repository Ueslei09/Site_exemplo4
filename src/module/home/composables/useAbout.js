// src/modules/about/composables/useAbout.js
import { ref, onMounted } from 'vue'
import { aboutService } from '../services/aboutService'

export function useAbout() {
  const uniqueBgImage = ref('')
  const bioIntro = ref({})
  const timelineData = ref([])
  const activeYear = ref('bio')
  const isNavbarHidden = ref(false) // Controla a visibilidade da navbar no mobile
  const loading = ref(true)

  const loadData = () => {
    loading.value = true
    try {
      const data = aboutService.getAboutData()
      uniqueBgImage.value = data.uniqueBgImage
      bioIntro.value = data.bioIntro
      timelineData.value = data.timeline
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      loading.value = false
    }
  }

  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  onMounted(() => {
    loadData()
  })

  return {
    uniqueBgImage,
    bioIntro,
    timelineData,
    activeYear,
    isNavbarHidden,
    loading,
    scrollToSection
  }
}
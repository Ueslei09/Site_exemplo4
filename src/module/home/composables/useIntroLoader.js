// src/modules/home/composables/useIntroLoader.js
import { ref, onMounted } from 'vue'

export function useIntroLoader(duration = 800, fadeDuration = 600) {
  const isLoading = ref(false)
  const isFadingOut = ref(false)

  onMounted(() => {
    // O navegador do utilizador gerencia isto sozinho por aba/sessão.
    // Assim que ele abre o site ou dá F5 na aba, o loader toca.
    isLoading.value = true
    isFadingOut.value = false

    // Inicia o fade out suave
    setTimeout(() => {
      isFadingOut.value = true
    }, duration)

    // Remove do DOM após a animação
    setTimeout(() => {
      isLoading.value = false
    }, duration + fadeDuration)
  })

  return {
    isLoading,
    isFadingOut
  }
}
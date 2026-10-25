// src/shared/composables/useFooter.js
import { ref } from 'vue'
import { getFooterData } from '../services/footerService'

export function useFooter() {
  const footerData = ref(getFooterData())

  return {
    footerData
  }
}
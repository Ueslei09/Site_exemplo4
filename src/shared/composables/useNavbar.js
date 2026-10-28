// src/shared/composables/useNavbar.js
import { ref, onMounted, onUnmounted } from 'vue'
import { getNavbarData } from '../services/navbarService'

export function useNavbar() {
  const navbarData = ref(getNavbarData())
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)
  const isNavbarHidden = ref(false)
  
  let lastScrollTop = 0

  const handleScroll = (e) => {
    // Pega o scroll direto do container de conteúdo principal
    const currentScrollTop = e.target.scrollTop

    isScrolled.value = currentScrollTop > 50

    if (currentScrollTop > lastScrollTop && currentScrollTop > 60) {
      isNavbarHidden.value = true // Esconde ao descer
    } else {
      isNavbarHidden.value = false // Mostra ao subir
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  onMounted(() => {
    const container = document.getElementById('scroll-container')
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
    }
  })

  onUnmounted(() => {
    const container = document.getElementById('scroll-container')
    if (container) {
      container.removeEventListener('scroll', handleScroll)
    }
  })

  return {
    navbarData,
    isScrolled,
    isMobileMenuOpen,
    isNavbarHidden,
    toggleMobileMenu,
    closeMobileMenu
  }
}
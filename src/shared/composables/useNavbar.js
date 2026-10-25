// src/shared/composables/useNavbar.js
import { ref, onMounted, onUnmounted } from 'vue'
import { getNavbarData } from '../services/navbarService'

export function useNavbar() {
  const navbarData = ref(getNavbarData())
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    navbarData,
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  }
}
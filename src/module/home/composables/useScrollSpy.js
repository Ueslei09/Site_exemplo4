// src/modules/about/composables/useScrollSpy.js
import { onMounted, onUnmounted } from 'vue'

export function useScrollSpy(activeStateRef, isNavbarHiddenRef, selector = '.year-section-item', thresholdValue = 0.4) {
  let observer = null

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
    
    // Se estiver no topo (na biografia), mostra a navbar. Assim que rolar mais de 40px para baixo, esconde a navbar.
    if (currentScrollTop < 40) {
      isNavbarHiddenRef.value = false
    } else {
      isNavbarHiddenRef.value = true
    }
  }

  onMounted(() => {
    const options = {
      root: null,
      threshold: thresholdValue,
      rootMargin: '-10% 0px -40% 0px'
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeStateRef.value = entry.target.getAttribute('data-section')
        }
      })
    }, options)

    setTimeout(() => {
      const sections = document.querySelectorAll(selector)
      sections.forEach(sec => observer.observe(sec))
    }, 150)

    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    window.removeEventListener('scroll', handleScroll)
  })
}
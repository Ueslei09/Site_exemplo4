// src/modules/about/composables/useScrollSpy.js
import { onMounted, onUnmounted } from 'vue'

export function useScrollSpy(activeStateRef, isNavbarHiddenRef, selector = '.year-section-item', thresholdValue = 0.4) {
  let observer = null

  const handleScroll = () => {
    const bioSection = document.getElementById('bio')
    
    if (bioSection) {
      // Pega a posição do fim da seção de biografia em relação à janela
      const bioRect = bioSection.getBoundingClientRect()
      
      // Se o final da biografia ainda estiver visível ou abaixo do topo (ainda estamos na bio), mostra a navbar.
      // Assim que o fim da biografia sobe e passa do topo (bioRect.bottom <= 50), esconde a navbar!
      if (bioRect.bottom > 80) {
        if (isNavbarHiddenRef) isNavbarHiddenRef.value = false
        document.body.classList.remove('hide-global-navbar')
      } else {
        if (isNavbarHiddenRef) isNavbarHiddenRef.value = true
        document.body.classList.add('hide-global-navbar')
      }
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
    document.body.classList.remove('hide-global-navbar')
  })
}
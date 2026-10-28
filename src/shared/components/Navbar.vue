<!-- src/shared/components/Navbar.vue -->
<template>
  <!-- A Navbar escuta o estado reativo isNavbarHidden -->
  <header class="w-100 position-absolute top-0 start-0 navbar-transparent" role="banner" :class="{ 'navbar-hidden': isNavbarHidden }">
    <nav class="navbar navbar-expand-lg navbar-dark px-3 px-md-5 py-3">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        
        <!-- LOGÓTIPO -->
        <router-link :to="navbarData.brand.homeUrl" class="navbar-brand text-decoration-none d-flex align-items-center custom-brand-pos">
          <img 
            v-if="navbarData.brand.logoUrl" 
            :src="navbarData.brand.logoUrl" 
            :alt="navbarData.brand.name" 
            class="navbar-logo-img"
          />
          <!-- Se o logoUrl estiver vazio, exibe o texto da marca estilizado -->
                  <span v-else class="text-white fw-bold fs-5 text-uppercase tracking-wider">
                      {{ navbarData.brand.name }}
                  </span>
        </router-link>

        <!-- BOTÃO MOBILE (Hambúrguer) -->
        <button class="navbar-toggler border-0 shadow-none text-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarContent" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- LINKS DE NAVEGAÇÃO -->
        <div class="collapse navbar-collapse justify-content-between align-items-center mt-3 mt-lg-0 w-100" id="mainNavbarContent" :class="{ 'show': isMobileMenuOpen }">
          <div class="d-none d-lg-block"></div>
          <ul class="navbar-nav w-100 justify-content-around align-items-lg-center mb-2 mb-lg-0 px-lg-4">
            <li v-for="(link, index) in navbarData.navLinks" :key="index" class="nav-item text-center">
              <router-link :to="link.url" class="nav-link text-white fw-medium px-2 py-1 position-relative custom-nav-link text-uppercase" @click="closeMobileMenu">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { useNavbar } from '../composables/useNavbar'
// Trazemos o isNavbarHidden de volta para o script
const { navbarData, isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, isNavbarHidden } = useNavbar()
</script>

<style scoped>
/* 1. POSIÇÃO DA LOGO */
.custom-brand-pos {
  margin-left: 0px; 
  margin-top: 0px;   
}

/* 2. TAMANHO DA LOGO */
.navbar-logo-img {
  height: 3.5rem;
  width: auto;
  object-fit: contain;
}

@media (min-width: 992px) {
  .navbar-logo-img {
    height: 7rem;
  }
  .custom-brand-pos {
    margin-left: 20px;
  }
}

/* ==========================================================
   TRANSPARÊNCIA E COMPORTAMENTO DE ESCONDER NO SCROLL
   ========================================================== */
.navbar-transparent {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0) 100%);
  backdrop-filter: blur(2px);
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* Transição suave universal para Desktop e Mobile */
  transition: transform 0.35s ease-in-out, opacity 0.35s ease-in-out;
}

/* AQUI ESTÁ O SEGREDO: Funciona em QUALQUER tela (Desktop e Mobile) */
.navbar-transparent.navbar-hidden {
  transform: translateY(-100%) !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

/* Ajustes específicos para Mobile (se necessário apenas mudar o fundo ao abrir menu) */
@media (max-width: 992px) {
  .navbar-transparent {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 100%) !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .navbar-transparent {
    transition: none !important;
  }
}

/* Estilo base dos links da navegação */
.custom-nav-link {
  color: #ffffff !important;
  font-size: 0.9rem;
  letter-spacing: 1px;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;
}

.custom-nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
}

.custom-nav-link:hover::after {
  width: 100%;
}
</style>
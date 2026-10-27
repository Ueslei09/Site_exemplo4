<!-- src/shared/components/Navbar.vue -->
<template>
  <!-- Posicionado no topo, adaptando-se para fixar ou ocultar quando necessário -->
  <header class="w-100 position-absolute top-0 start-0 navbar-transparent" role="banner" :class="{ 'navbar-hidden': isNavbarHidden }">
    <nav class="navbar navbar-expand-lg navbar-dark px-3 px-md-5 py-3">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        
        <!-- LOGÓTIPO: Visível tanto no mobile quanto no desktop agora! -->
        <router-link :to="navbarData.brand.homeUrl" class="navbar-brand text-decoration-none d-flex align-items-center custom-brand-pos">
          <img 
            v-if="navbarData.brand.logoUrl" 
            :src="navbarData.brand.logoUrl" 
            :alt="navbarData.brand.name" 
            class="navbar-logo-img"
          />
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
const { navbarData, isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, isNavbarHidden } = useNavbar()
</script>

<style scoped>
/* 1. POSIÇÃO DA LOGO */
.custom-brand-pos {
  margin-left: 0px; 
  margin-top: 0px;   
}

/* 2. TAMANHO DA LOGO (Responsivo: menor no telemóvel, maior no desktop) */
.navbar-logo-img {
  height: 4.5rem; /* Ajustado para mobile / desktop */
  width: auto;
  object-fit: contain;
}

@media (min-width: 992px) {
  .navbar-logo-img {
    height: 7rem; /* Tamanho original maior em telas grandes */
  }
  .custom-brand-pos {
    margin-left: 20px;
  }
}

/* Transparência e posicionamento da Navbar */
.navbar-transparent {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%);
  backdrop-filter: blur(2px);
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
}

/* Comportamento inteligente para esconder a navbar no mobile ao rolar na página Sobre */
@media (max-width: 992px) {
  .navbar-transparent {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
    transition: transform 0.3s ease-in-out;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 100%);
  }

  .navbar-transparent.navbar-hidden {
    transform: translateY(-100%) !important;
    pointer-events: none;
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

/* LINHA DE INDICADOR (HR / Sublinhado) no hover */
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
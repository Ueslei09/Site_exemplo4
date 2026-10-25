<!-- src/shared/components/Navbar.vue -->
<template>
  <!-- Posicionado de forma absoluta no topo para flutuar sobre o vídeo -->
  <header class="w-100 position-absolute top-0 start-0 navbar-transparent" role="banner">
    <nav class="navbar navbar-expand-lg navbar-dark px-3 px-md-5 py-3">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        
        <!-- LOGÓTIPO -->
        <router-link :to="navbarData.brand.homeUrl" class="navbar-brand text-decoration-none d-flex align-items-center me-lg-5">
          <img 
            v-if="navbarData.brand.logoUrl" 
            :src="navbarData.brand.logoUrl" 
            :alt="navbarData.brand.name" 
            style="height: 65px; width: auto; object-fit: contain;"
          />
        </router-link>

        <!-- BOTÃO MOBILE -->
        <button class="navbar-toggler border-0 shadow-none text-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarContent" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- LINKS -->
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
const { navbarData, isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbar()
</script>

<style scoped>
.navbar-transparent {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 100;
}

.custom-nav-link {
  color: #ffffff !important;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
<!-- src/modules/home/components/HeroSection.vue -->
<template>
  <section class="hero-section">

    <!-- TELA DE PRELOADER DE ENTRADA AO DAR F5 -->
     <transition name="fade">
    <div v-if="isLoading" class="page-loader" :class="{ 'fade-out': isFadingOut }">
      <div class="loader-bars">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </transition>
    <!-- VÍDEO DE FUNDO -->
    <div class="video-background">
      <video autoplay muted loop playsinline class="hero-media">
        <source :src="homeData.localVideoUrl" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>
    </div>

    <!-- CAIXA COM O TÍTULO/LOGO E O BOTÃO -->
    <div class="hero-content-box">
      <div v-if="homeData.showLogoImage" class="hero-logo-container mb-2">
        <img :src="homeData.logoImage" :alt="homeData.logoAlt" class="hero-logo-img img-fluid" />
      </div>
      <h1 v-else class="hero-title display-5 fw-bold text-white text-uppercase mb-2">
        {{ homeData.title }}
      </h1>

      <p class="hero-subtitle text-white-50 mb-3 fs-6 text-center">
        {{ homeData.subtitle }}
      </p>
      
      <router-link :to="homeData.buttonUrl" class="btn custom-hero-btn text-uppercase fw-semibold px-4 py-2 rounded-pill shadow-lg">
        {{ homeData.buttonText }}
      </router-link>
    </div>

  </section>
</template>

<script setup>

import { useHome } from '../composables/useHome'
import { useIntroLoader } from '../composables/useIntroLoader'



const { homeData } = useHome()
const { isLoading, isFadingOut } = useIntroLoader(700, 600)
</script>

<style scoped>
.hero-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  overflow: hidden;
  z-index: 1;
}


/* ESTILO DO PRELOADER DE ENTRADA (F5) */
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
}

/* Classe de fade out acionada pelo Vue */
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-leave-to {
  opacity: 0;
}

.loader-bars {
  display: flex;
  gap: 8px;
  align-items: center;
}

.loader-bars span {
  display: inline-block;
  width: 6px;
  height: 28px;
  background-color: #ffffff;
  animation: pulseBars 0.8s infinite ease-in-out alternate;
}

.loader-bars span:nth-child(2) {
  animation-delay: 0.2s;
}

.loader-bars span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulseBars {
  0% { transform: scaleY(0.4); opacity: 0.3; }
  100% { transform: scaleY(1); opacity: 1; }
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.hero-media {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover; 
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
  z-index: 1;
}

/* ========================================================================== */
/* CONTROLO DA CAIXA: Mude o 'left' para mover para a esquerda ou direita     */
/* ========================================================================== */
.hero-content-box {
  position: absolute;
  bottom: 4rem;
  left: 50%;                     /* <--- ALTERE AQUI: 50% (Centro), valores menores (ex: 30%) vão para a Esquerda */
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;           /* Centraliza o botão e o texto entre si */
  text-align: center;
  width: 100%;
  max-width: 450px;
  z-index: 2;
}

.hero-title {
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.9);
}

.hero-subtitle {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
}

.custom-hero-btn {
  background-color: rgba(0, 0, 0, 0.5); 
  color: #ffffff;
  border: 2px solid #ffffff;
  letter-spacing: 2px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.custom-hero-btn:hover {
  background-color: #ffffff; 
  color: #000000;            
  border-color: #ffffff;
}

.hero-logo-container {
  position: relative;        /* Permite mover a logo livremente */
  top: 80px;                  /* <--- Mude aqui: valores positivos descem a logo, negativos sobem */
  left: 0px;                 /* <--- Mude aqui: valores positivos movem para a direita, negativos para a esquerda */
  max-width: 320px;
  width: 100%;
  margin-bottom: 1rem;
}

.hero-logo-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.9));
}


@media (max-width: 992px) {
  .hero-content-box {
    position: absolute !important;
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) !important;
    
    /* CONTROLO DA ALTURA NO TELEMÓVEL: */
    bottom: auto !important;      /* Desliga o bottom antigo */
    top: 10% !important;          /* <--- Mude aqui: 50% é o centro da tela, menos que 50% sobe, mais que 50% desce */
  }
}
</style>
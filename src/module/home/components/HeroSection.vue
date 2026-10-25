<!-- src/modules/home/components/HeroSection.vue -->
<template>
  <section class="hero-section">
    
    <!-- VÍDEO DE FUNDO (Ocupa a tela inteira por trás da Navbar) -->
    <div class="video-background">
      <video autoplay muted loop playsinline class="hero-media">
        <source :src="homeData.localVideoUrl" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>
    </div>

    <!-- CONTEÚDO COM PADDING NO TOPO PARA NÃO FICAR ESCONDIDO PELA NAVBAR -->
    <div class="container position-relative z-1 px-4 d-flex flex-column align-items-end justify-content-end pb-3 me-lg-5 hero-content-box">
      
      <div v-if="homeData.showLogoImage" class="hero-logo-container mb-2">
        <img :src="homeData.logoImage" :alt="homeData.logoAlt" class="hero-logo-img img-fluid" />
      </div>
      <h1 v-else class="hero-title display-5 fw-bold text-white text-uppercase mb-2">
        {{ homeData.title }}
      </h1>

      <p class="hero-subtitle text-white-50 mb-3 fs-6 text-end">
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
const { homeData } = useHome()
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
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 4rem; /* Afasta o botão/texto do rodapé */
  padding-right: 3rem;
  overflow: hidden;
  z-index: 1;
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
  /* 'cover' garante que o vídeo preenche o fundo inteiro de ponta a ponta sem sobras pretas */
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

.container {
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
</style>
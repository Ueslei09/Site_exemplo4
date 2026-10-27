<!-- src/modules/about/components/AboutSection.vue -->
<template>
  <div class="about-page-wrapper" :class="{ 'navbar-hidden': isNavbarHidden }" v-if="!loading">
    
    <!-- 1. IMAGEM DE FUNDO ÚNICA FIXA PARA TODA A PÁGINA -->
    <div class="fixed-bg-container">
      <img :src="uniqueBgImage" alt="Background" class="bg-media" />
      <div class="bg-overlay"></div>
    </div>

    <!-- 2. BARRA LATERAL DE NAVEGAÇÃO -->
    <aside class="sticky-timeline-sidebar">
      <ul class="timeline-years-list">
        <li 
          @click="scrollToSection('bio')"
          :class="{ active: activeYear === 'bio' }"
          class="year-item bio-link"
        >
          Biografia
        </li>
        <li 
          v-for="item in timelineData" 
          :key="item.year"
          @click="scrollToSection(`year-${item.year}`)"
          :class="{ active: activeYear === item.year }"
          class="year-item"
        >
          {{ item.year }}
        </li>
      </ul>
    </aside>

    <!-- 3. CONTEÚDO COM SCROLL -->
    <main class="scrollable-content-container">
      
      <!-- SEÇÃO BIOGRAFIA -->
      <section id="bio" class="year-section-item" data-section="bio">
        <div class="content-card-box">
          <h2 class="year-heading display-4 fw-bold text-white mb-3">
            {{ bioIntro.title }}
          </h2>
          <div class="card-divider-short mb-4"></div>
          <h5 class="year-subtitle text-white fw-normal mb-4">
            {{ bioIntro.subtitle }}
          </h5>
          <div class="card-grid-transparent-bio">
            <p class="description text-light lh-lg fs-5">
              {{ bioIntro.text }}
            </p>
          </div>
        </div>
      </section>

      <!-- SEÇÕES DOS ANOS -->
      <section 
        v-for="item in timelineData" 
        :key="item.year"
        :id="`year-${item.year}`"
        class="year-section-item"
        :data-section="item.year"
      >
        <div class="content-card-box">
          
          <h2 class="year-heading display-4 fw-bold text-white mb-2">
            {{ item.year }}
          </h2>
          
          <h5 class="year-subtitle text-warning fw-semibold mb-4">
            {{ item.title }} — {{ item.subtitle }}
          </h5>

          <div class="card-grid-transparent">
            <div class="thumbnail-wrapper" v-if="item.image">
              <img :src="item.image" :alt="item.title" class="img-fluid rounded-3 shadow-lg album-thumb" />
            </div>
            <div class="text-wrapper">
              <p class="description text-light lh-lg">
                {{ item.text }}
              </p>
            </div>
          </div>

          <hr class="card-divider my-5" />

        </div>
      </section>
    </main>

  </div>
</template>

<script setup>
import { useAbout } from '../composables/useAbout'
import { useScrollSpy } from '../composables/useScrollSpy'

const { 
  uniqueBgImage, 
  bioIntro,
  timelineData, 
  activeYear, 
  isNavbarHidden,
  loading, 
  scrollToSection 
} = useAbout()

useScrollSpy(activeYear, isNavbarHidden, '.year-section-item', 0.4)
</script>

<style scoped>
.about-page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  overflow-y: auto;
  overflow-x: hidden;
}

.fixed-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}

.bg-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.3) 100%);
}

.sticky-timeline-sidebar {
  position: fixed;
  left: 3rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.timeline-years-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  padding-left: 1.2rem;
}

.year-item {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.bio-link {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.year-item:hover {
  color: rgba(255, 255, 255, 0.8);
}

.year-item.active {
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  border-left: 3px solid #ffc107;
  margin-left: -1.35rem;
  padding-left: 1.1rem;
}

.scrollable-content-container {
  position: relative;
  z-index: 2;
  margin-left: 14rem;
  padding-right: 4rem;
}

.year-section-item {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.content-card-box {
  max-width: 900px;
  width: 100%;
}

.year-heading {
  font-family: Georgia, serif;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.9);
}

.year-subtitle {
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
}

.card-divider-short {
  width: 40px;
  height: 2px;
  background-color: #ffffff;
}

.card-grid-transparent-bio {
  background: transparent;
  padding: 0;
}

.card-grid-transparent {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2.5rem;
  align-items: center;
  background: transparent;
  padding: 0;
}

.album-thumb {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.description {
  font-size: 0.95rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
}

.card-divider {
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
}

@media (max-width: 992px) {
  .about-page-wrapper {
    overflow-y: auto;
    position: relative;
  }

  .scrollable-content-container {
    margin-left: 0;
    padding: 1rem 1rem;
  }

  /* BARRA DE ANOS: Fixa de forma garantida no topo absoluto (top: 0) no telemóvel */
  .sticky-timeline-sidebar {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    transform: none !important;
    background: rgba(0, 0, 0, 0.95) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 0.8rem 1rem !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    z-index: 9999 !important; /* Valor máximo para garantir que nunca fica por baixo de nada */
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.9);
  }

  .sidebar-title {
    display: none !important;
  }

  .timeline-years-list {
    display: flex !important;
    flex-direction: row !important;
    border-left: none !important;
    padding-left: 0 !important;
    margin: 0 !important;
    gap: 1.5rem;
    overflow-x: auto !important;
    width: 100% !important;
    justify-content: flex-start !important;
    scrollbar-width: none;
  }

  .timeline-years-list::-webkit-scrollbar {
    display: none;
  }

  .year-item {
    font-size: 1rem !important;
    white-space: nowrap !important;
    color: rgba(255, 255, 255, 0.6) !important;
    cursor: pointer;
  }

  .year-item.active {
    border-left: none !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
    border-bottom: 2px solid #ffc107 !important;
    font-size: 1.1rem !important;
    color: #ffffff !important;
    font-weight: 700 !important;
  }

  /* Espaçamento superior ideal para o conteúdo começar logo abaixo da barra fixa */
  .year-section-item {
    min-height: auto !important;
    padding-top: 6rem !important;
    padding-bottom: 3rem !important;
  }

  .card-grid-transparent {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .album-thumb {
    max-height: 180px;
    max-width: 180px;
    margin: 0 auto;
    display: block;
  }
}
</style>
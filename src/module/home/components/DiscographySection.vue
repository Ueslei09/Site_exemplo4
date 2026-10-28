<template>
  <div class="discography-page-wrapper">
    
    <!-- IMAGEM DE FUNDO FIXA -->
    <div class="fixed-bg-container">
      <div class="bg-overlay"></div>
    </div>

    <!-- CONTEÚDO PRINCIPAL -->
    <main class="discography-content-container container py-5">
      
      <!-- Cabeçalho da Seção -->
      <div class="text-center mb-5 pt-5">
        <h1 class="display-3 fw-bold text-white mb-3" tabIndex="0">
          {{ discographyData.sectionTitle }}
        </h1>
        <!--<div class="card-divider-short mx-auto mb-4"></div>-->
        <p class="text-light fs-5 mx-auto" style="max-width: 700px;">
          {{ discographyData.sectionSubtitle }}
        </p>
      </div>

      <!-- GRID DE CARDS DOS ÁLBUNS (Vindo do Service) -->
      <div class="row g-4 justify-content-center">
        <div 
          v-for="album in discographyData.albums" 
          :key="album.id" 
          class="col-lg-4 col-md-6 col-12"
        >
          <article class="album-card position-relative rounded-4 overflow-hidden shadow-lg" tabIndex="0" :aria-label="`Álbum ${album.title}, lançado em ${album.year}`">
            
            <!-- Imagem do Álbum -->
            <img 
              :src="album.image" 
              :alt="`Capa oficial do álbum ${album.title} lançado em ${album.year}`" 
              class="album-image w-100" 
            />

            <!-- Título visível na base do card antes do hover -->
            <div class="album-static-info p-3 text-center">
              <h3 class="h5 fw-bold text-white mb-1">{{ album.title }}</h3>
              <span class="text-warning small fw-semibold">{{ album.year }}</span>
            </div>

            <!-- OVERLAY DE HOVER COM OS LINKS DE STREAMING -->
            <div class="album-hover-overlay d-flex flex-column align-items-center justify-content-center p-4">
              <h4 class="h5 fw-bold text-white mb-3 text-center">{{ album.title }}</h4>
              
              <nav class="streaming-links-list w-100 d-flex flex-column gap-2" aria-label="Plataformas de streaming disponíveis">
                <a 
                  v-for="(link, index) in album.streamingLinks" 
                  :key="index"
                  :href="link.url"
                  class="btn btn-outline-light w-100 py-2 fw-medium text-uppercase tracking-wide streaming-btn d-flex align-items-center justify-content-center gap-2"
                  :aria-label="link.ariaLabel"
                >
                  <!-- 
                    AQUI ACONTECE A INTEGRAÇÃO:
                    1. 'link.name' vem direto do seu service (ex: "Spotify")
                    2. 'getIconClass()' traduz esse nome para a classe do ícone vinda do composable 
                  -->
                  <i :class="getIconClass(link.name)" aria-hidden="true"></i>
                  <span>{{ link.name }}</span>
                </a>
              </nav>
            </div>

          </article>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
// 1. Importa o composable que busca os dados dos álbuns (conectado ao seu Service)
import { useDiscography } from '../composables/useDiscography'

// 2. Importa o composable isolado que gera os ícones das plataformas
import { usePlatformIcon } from '../composables/usePlatformIcon'

// Extrai os dados dos álbuns
const { discographyData } = useDiscography()

// Extrai a função de ícones do composable
const { getIconClass } = usePlatformIcon()
</script>

<style scoped>
/* Os seus estilos CSS mantêm-se exatamente iguais */
.discography-page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
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
  background: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
}

.discography-content-container {
  position: relative;
  z-index: 2;
}

.card-divider-short {
  width: 60px;
  height: 3px;
  background-color: #ffc107;
}

.album-card {
  height: 380px;
  background-color: #121212;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.album-card:hover {
  transform: translateY(-50px);
  box-shadow: 0 10px 25px rgba(255, 193, 7, 0.2) !important;
}

.album-image {
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.album-static-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 70%, transparent 100%);
  z-index: 2;
  transition: opacity 0.3s ease;
}

.album-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 3;
}

.album-card:hover .album-hover-overlay,
.album-card:focus-within .album-hover-overlay {
  opacity: 1;
  visibility: visible;
}

.album-card:hover .album-static-info {
  opacity: 0;
}

.streaming-btn {
  font-size: 0.85rem;
  letter-spacing: 1px;
  border-color: rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
}

.streaming-btn:hover {
  background-color: #ffc107 !important;
  color: #000000 !important;
  border-color: #ffc107 !important;
  font-weight: 600;
}

@media (max-width: 768px) {
  .album-card {
    height: 340px;
  }
}
</style>
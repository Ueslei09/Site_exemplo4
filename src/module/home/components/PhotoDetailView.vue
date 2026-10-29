<!-- src/modules/photos/PhotoDetailView.vue -->
<template>
  <div 
    class="photo-detail-wrapper position-relative min-vh-100 w-100 pb-5"
    :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.92)), url(${gallery.coverImage})` }"
  >
    <div class="container-fluid py-5 mt-5">
      <div class="px-md-5">
        
        <!-- CABEÇALHO: Navegação e Informações -->
        <header class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 border-bottom border-secondary pb-3">
          <div>
            <nav aria-label="breadcrumb" class="mb-2">
              <ol class="breadcrumb mb-1 small">
                <li class="breadcrumb-item"><router-link to="/fotos" class="text-white-50 text-decoration-none">Fotos</router-link></li>
                <li class="breadcrumb-item text-white active" aria-current="page">{{ gallery.title }}</li>
              </ol>
            </nav>
            <h1 class="text-white fw-bold text-uppercase fs-2 mb-1">{{ gallery.title }}</h1>
            <div class="text-white-50 small">
              <time :datetime="gallery.date">{{ gallery.date }}</time> • <span>{{ gallery.photosCount }} fotos</span>
            </div>
          </div>

          <!-- LINK "TODAS AS GALERIAS" COM ESTILO DE SETA E LINHA INFERIOR -->
          <div class="mt-4 mt-md-0">
            <router-link to="/fotos" class="back-galleries-link text-white text-decoration-none pb-2 position-relative d-inline-block">
              <span class="arrow me-2">←</span> Todas as galerias
            </router-link>
            <hr class="gallery-divider my-1 mx-auto mx-md-0 ms-md-auto" />
          </div>
        </header>

        <!-- GRELHA DE FOTOS QUASE COLADAS (Margin 1px) -->
        <section class="gallery-grid" aria-label="Galeria de imagens do show">
          <div 
            v-for="(photo, index) in gallery.images" 
            :key="index" 
            class="gallery-item"
          >
            <img 
              :src="photo.url" 
              :alt="photo.alt || `Foto ${index + 1} da galeria ${gallery.title}`" 
              class="gallery-thumbnail w-100 h-100 object-fit-cover"
              loading="lazy"
            />
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePhotos } from '../composables/usePhotos'

const route = useRoute()
const { fetchGallery } = usePhotos()

const gallery = fetchGallery(route.params.id)
</script>

<style scoped>
/* Fundo imersivo de 100% vindo do Service (coverImage) */
.photo-detail-wrapper {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
}

/* ESTILO DO LINK "TODAS AS GALERIAS" COM A LINHA INFERIOR */
.back-galleries-link {
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: opacity 0.3s ease;
}

.back-galleries-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.3s ease;
}

.back-galleries-link:hover {
  opacity: 0.8;
}

.back-galleries-link:hover::after {
  background-color: #ffffff;
}

.gallery-divider {
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  max-width: 180px;
  margin: 0;
}

.back-container:hover .gallery-divider {
  background-color: #ffffff !important;
}

/* Grelha moderna com imagens praticamente coladas (1px de espaço) */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1px;

}

.gallery-item {
  height: 350px;
  overflow: hidden;
  background-color: #111;
}

.gallery-thumbnail {
  transition: transform 0.4s ease;
}

.gallery-thumbnail:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .gallery-item {
    height: 250px;
  }
}
</style>
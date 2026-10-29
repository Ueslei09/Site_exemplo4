<!-- src/modules/photos/PhotosView.vue -->
<template>
  <div 
    class="photos-page-wrapper"
    :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${pageData.backgroundImage})` }"
  >
    <div class="container-fluid py-5 mt-5">
      <div class="row px-md-5">
        
        <!-- TÍTULO E SUBTÍTULO VINDO DO SERVICE -->
        <div class="col-12 mb-4">
          <h1 class="text-white text-uppercase fw-bold tracking-wider">{{ pageData.title }}</h1>
          <p class="text-white-50">{{ pageData.subtitle }}</p>
        </div>

        <!-- 10 CARDS DE FOTOS -->
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" v-for="gallery in pageData.galleries" :key="gallery.id">
          <router-link :to="{ name: 'photo-detail', params: { id: gallery.id } }" class="photo-card-link text-decoration-none">
            <article class="photo-card position-relative overflow-hidden rounded-4 shadow-lg">
              <img :src="gallery.coverImage" :alt="`Cobertura fotográfica do show em ${gallery.title}`" class="photo-img w-100 h-100 object-fit-cover" />
              
              <div class="photo-overlay d-flex flex-column justify-content-end p-4">
                <div class="photo-info">
                  <h2 class="text-white fs-5 fw-bold mb-1 text-uppercase">{{ gallery.title }}</h2>
                  <time class="text-white-50 small" :datetime="gallery.date">{{ gallery.date }}</time>
                </div>
              </div>
            </article>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { usePhotos } from '../composables/usePhotos'
const { pageData } = usePhotos()
</script>

<style scoped>
/* Garante que o wrapper ocupa 100% da tela com a imagem de fundo fixa e imersiva */
.photos-page-wrapper {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
}

.photo-card {
  height: 420px;
  background-color: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.photo-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.4);
}

.photo-img {
  transition: transform 0.5s ease;
}

.photo-card:hover .photo-img {
  transform: scale(1.08);
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
}
</style>
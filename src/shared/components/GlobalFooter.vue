<!-- src/shared/components/GlobalFooter.vue -->
<template>
  <footer class="global-footer text-white py-3 position-relative w-100 mt-auto" v-if="footerData">
    <div class="container-fluid px-3 px-md-5">
      
      <div class="row align-items-center justify-content-between g-2">
        
        <!-- Copyright à Esquerda -->
        <div class="col-12 col-md-8 text-center text-md-start">
          <p class="small text-white-50 m-0" style="font-size: 0.85rem; letter-spacing: 0.5px;">
            {{ footerData.copyrightText }} - <span class="fw-semibold text-white">{{ footerData.brandName }}</span> - {{ footerData.year }}
          </p>
        </div>

        <!-- Redes Sociais à Direita -->
        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end gap-3">
          <span class="small text-white-50 text-uppercase" style="font-size: 0.75rem; letter-spacing: 1px;">
            {{ footerData.socialLabel }}
          </span>
          <div class="d-flex gap-2 align-items-center">
            <a 
              v-for="(social, index) in footerData.socialLinks" 
              :key="index" 
              :href="social.url" 
              :aria-label="social.name"
              class="social-link text-white-50 text-decoration-none d-flex align-items-center justify-content-center"
            >
              <!-- Instagram -->
              <i v-if="social.icon === 'instagram'" class="bi bi-instagram"></i>
              <!-- Twitter / X -->
              <i v-else-if="social.icon === 'twitter'" class="bi bi-twitter-x"></i>
              <!-- Facebook -->
              <i v-else-if="social.icon === 'facebook'" class="bi bi-facebook"></i>
              <!-- YouTube -->
              <i v-else-if="social.icon === 'youtube'" class="bi bi-youtube"></i>
              <!-- Spotify -->
              <i v-else-if="social.icon === 'spotify'" class="bi bi-spotify"></i>
              <!-- TikTok / Outros -->
              <i v-else class="bi bi-music-note-beamed"></i>
            </a>
          </div>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
import { useFooter } from '../composables/useFooter'

const { footerData } = useFooter()
</script>

<style scoped>
.global-footer {
  background-color: rgba(5, 5, 5, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;
}

.social-link {
  width: 28px;
  height: 28px;
  transition: color 0.3s ease, transform 0.3s ease;
  font-size: 0.95rem;
}

.social-link:hover {
  color: #ffffff !important;
  transform: translateY(-2px);
}
</style>
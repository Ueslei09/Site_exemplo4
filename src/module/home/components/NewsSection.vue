<!-- src/modules/news/components/NewsSection.vue -->
<template>
  <section class="news-section-wrapper" role="region" aria-label="Seção de Notícias">
    
    <!-- 1. Imagem de fundo estática (100vw / 100vh) -->
    <div class="news-bg-fixed" v-if="newsData" aria-hidden="true">
      <img :src="newsData.backgroundImg" alt="" class="w-100 h-100 object-fit-cover" />
      <div class="news-overlay"></div>
    </div>

    <!-- ================= VISTA 1: LISTAGEM DE CARDS ================= -->
    <div class="container-fluid news-main-container px-4 px-lg-5" v-if="!loading && newsData && !selectedArticle">
      <div class="row align-items-center h-100 g-5">
        
        <!-- Coluna Esquerda: Título e Subtítulo Fixos -->
        <div class="col-12 col-lg-5 d-flex align-items-center">
          <div class="static-intro ps-lg-4" style="margin-top: 150px;">
            <h1 class="display-3 fw-bold text-white mb-3" tabindex="0">
              {{ newsData.title }}
            </h1>
            <div class="title-underline mb-4" aria-hidden="true"></div>
            <p class="text-light fs-5 opacity-85 lh-base" tabindex="0">
              {{ newsData.subtitle }}
            </p>
          </div>
        </div>

        <!-- Coluna Direita: Cards com Scroll Próprio + Botão Carregar Mais -->
        <div class="col-12 col-lg-7 h-100">
          <div class="cards-scroll-container pe-lg-3 py-4">
            
            <div class="row g-4">
              <div v-for="article in displayedArticles" :key="article.id" class="col-12 col-md-6">
                <NewsCard :article="article" @read-more="openArticle" />
              </div>
            </div>

            <div class="text-center my-4" v-if="hasMore">
              <button 
                @click="loadMore" 
                class="btn px-5 py-2 rounded-pill fw-semibold text-dark bg-light border-0 shadow-sm load-more-btn"
                aria-label="Carregar mais notícias"
              >
                Carregar mais
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>


    <!-- ================= VISTA 2: DETALHE DO ARTIGO ================= -->
    <div class="container detail-scroll-view px-3 px-lg-4 py-5" v-if="!loading && selectedArticle">
      
      <!-- ÍCONES SOCIAIS FIXOS NA TELA (Ficam parados na lateral direita enquanto a página rola) -->
      <div class="social-share-fixed">
        <a href="#" class="social-icon" aria-label="Partilhar no Twitter/X"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="social-icon" aria-label="Partilhar no Facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="social-icon" aria-label="Partilhar no Telegram"><i class="bi bi-telegram"></i></a>
        <a href="#" class="social-icon" aria-label="Partilhar no WhatsApp"><i class="bi bi-whatsapp"></i></a>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          
          <!-- TOPO DO DETALHE -->
          <div class="d-flex justify-content-between align-items-center mb-4 pb-2">
            <div class="back-link-wrapper" @click="backToList">
              <button class="btn p-0 text-white fw-semibold bg-transparent border-0 back-nav-link" aria-label="Voltar para todas as notícias">
                ← Todas as Notícias
              </button>
              <hr class="custom-hover-hr m-0 mt-1" />
            </div>

            <span class="text-light small opacity-75 text-truncate max-w-200" :title="selectedArticle.title">
              {{ selectedArticle.title }}
            </span>
          </div>

          <!-- Caixa do Artigo -->
          <div class="article-box p-4 p-md-5 rounded-4 shadow-lg">
            
            <h1 class="h2 fw-bold text-white mb-2" tabindex="0">
              {{ selectedArticle.title }}
            </h1>
            <span class="text-light opacity-75 small d-block mb-4">
              {{ selectedArticle.date }}
            </span>

            <div class="rounded-3 overflow-hidden mb-4 shadow-sm" style="max-height: 480px;">
              <img :src="selectedArticle.image" :alt="selectedArticle.title" class="w-100 h-100 object-fit-cover" />
            </div>

            <div class="article-body text-light lh-lg opacity-90">
              <p v-for="(paragraph, idx) in selectedArticle.content.split('\n\n')" :key="idx" class="mb-3">
                {{ paragraph }}
              </p>
            </div>

            <div class="mt-5 pt-4 border-top border-secondary border-opacity-25 text-center">
              <button @click="backToList" class="btn btn-light rounded-pill px-5 py-3 fw-bold text-dark shadow">
                Todas as Notícias
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useNews } from '../composables/useNews'
import NewsCard from './NewsCard.vue'

const { 
  newsData, 
  loading, 
  displayedArticles, 
  hasMore, 
  loadMore, 
  selectedArticle, 
  openArticle, 
  backToList 
} = useNews()
</script>

<style scoped>
.news-section-wrapper {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #000;
  overflow-y: auto !important;
  overflow-x: hidden;
}

.news-bg-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}

.news-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 100%);
}

.news-main-container {
  position: relative;
  z-index: 2;
  height: 100vh;
  padding-top: 100px;
}

.title-underline {
  width: 60px;
  height: 3px;
  background-color: #ffffff;
}

.cards-scroll-container {
  height: calc(100vh - 120px);
  overflow-y: auto !important;
  overflow-x: hidden;
  padding-right: 10px;
}

.back-link-wrapper {
  display: inline-block;
  cursor: pointer;
}

.back-nav-link {
  transition: opacity 0.3s ease;
}

.back-nav-link:hover {
  opacity: 0.75;
}

.custom-hover-hr {
  border: none;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.4);
  width: 0%;
  transition: width 0.3s ease-in-out, background-color 0.3s ease;
}

.back-link-wrapper:hover .custom-hover-hr {
  width: 100%;
  background-color: #ffffff;
}

.max-w-200 {
  max-width: 280px;
}

.detail-scroll-view {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding-top: 120px !important;
  padding-bottom: 5rem !important;
}

.article-box {
  background-color: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

/* Ícones sociais fixos na lateral direita da tela (exatamente igual ao exemplo do vídeo) */
.social-share-fixed {
  position: fixed;
  top: 35%;
  right: 2.5rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  z-index: 10;
}

.social-icon {
  width: 38px;
  height: 38px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  background-color: #ffffff;
  color: #000000;
}

@media (max-width: 992px) {
  .social-share-fixed {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
}

.load-more-btn {
  background-color: #e0e0e0 !important;
  transition: all 0.3s ease;
}
.load-more-btn:hover {
  background-color: #ffffff !important;
  transform: translateY(-2px);
}
</style>
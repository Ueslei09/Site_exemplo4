<!-- src/modules/agenda/components/AgendaSection.vue -->
<template>
  <div class="agenda-page-wrapper">
    
    <!-- 1. IMAGEM DE FUNDO: Ocupa 100% da largura e altura da tela -->
    <div class="fixed-bg-container">
      <img :src="agendaData.image" :alt="agendaData.title" class="bg-media" />
      <div class="bg-overlay"></div>
    </div>

    <!-- 2. CONTEÚDO FLUTUANTE: Alinhado à DIREITA da tela com texto transparente -->
    <main class="agenda-content-container container-fluid min-vh-100 d-flex align-items-center">
      <div class="row w-100 justify-content-end align-items-center g-0 px-4 px-md-5">
        
        <div class="col-lg-6 col-md-8 col-12">
          <div class="agenda-info-box p-4 p-md-5">
            <h1 class="agenda-heading display-3 fw-bold text-white mb-3">
              {{ agendaData.title }}
            </h1>
            <div class="card-divider-short mb-4"></div>
            <p class="agenda-description text-light lh-lg fs-5">
              {{ agendaData.description }}
            </p>
            
            <!---<div class="mt-4">
              <button class="btn btn-warning px-4 py-2 fw-semibold text-dark shadow-sm">
                {{ agendaData.buttonText }}
              </button>
            </div>-->
          </div>
        </div>

      </div>
    </main>

  </div>
</template>

<script setup>
import { useAgenda } from '../composables/useAgenda'

const { agendaData } = useAgenda()
</script>

<style scoped>
.agenda-page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* Imagem fixa de fundo cobrindo 100% da tela */
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
  filter: brightness(0.65);
}

/* Gradiente suave na imagem de fundo para garantir leitura sem tarja de caixa */
.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.85) 100%);
}

.agenda-content-container {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding-top: 80px;
}

/* Caixa de texto totalmente transparente (sem background ou borders) */
.agenda-info-box {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.agenda-heading {
  font-family: Georgia, serif;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.9);
  letter-spacing: 1px;
}

.card-divider-short {
  width: 50px;
  height: 2px;
  background-color: #ffc107;
}

.agenda-description {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
  color: rgba(255, 255, 255, 0.95) !important;
}

/* Responsividade para telemóveis */
@media (max-width: 992px) {
  .agenda-content-container .row {
    justify-content: center !important;
  }

  .agenda-info-box {
    text-align: center;
    padding: 2rem !important;
  }

  .card-divider-short {
    margin: 0 auto 1.5rem auto !important;
  }
}
</style>
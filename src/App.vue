<!-- src/App.vue -->
<template>
  <div id="app" class="app-container">
    
    <!-- Navbar fixa transparente no topo absoluto -->
    <Navbar />

    <!-- Conteúdo principal (Hero com o vídeo a ocupar 100% do fundo) -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer fixo transparente na base absoluta -->
    <GlobalFooter />

  </div>
</template>

<script setup>
  import Navbar from '@/shared/components/Navbar.vue'
  import GlobalFooter from '@/shared/components/GlobalFooter.vue'
</script>

<style>
/* Trava a página exatamente em 100vh sem scroll e fundo totalmente preto */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
}

.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* O main ocupa 100% da tela para o vídeo servir de fundo total */
.main-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
</style>
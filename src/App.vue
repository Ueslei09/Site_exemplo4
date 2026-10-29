<!-- src/App.vue -->
<template>
  <div id="app" class="app-container">
    <!-- 1. Navbar Fixa no Topo -->
    <Navbar />

    <!-- 2. Conteúdo Central com scroll interno ativo -->
    <main class="main-content" id="scroll-container">
      <router-view />
    </main>

    <!-- 3. Footer na Base -->
    <GlobalFooter />
  </div>
</template>

<script setup>
  import Navbar from '@/shared/components/Navbar.vue'
  import GlobalFooter from '@/shared/components/GlobalFooter.vue'
</script>

<style>
/* Garante que o container raiz gerencia o overflow de forma inteligente */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #000;
  overflow-x: hidden; /* Remove apenas o scroll horizontal chato das laterais */
}

.app-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
}

.main-content {
  flex: 1;
  position: relative;
  width: 100%;
  overflow-y: auto; /* <--- PERMITE Rolar APENAS o conteúdo central (como os cards) sem quebrar o layout */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}
</style>
<!-- src/App.vue -->
<template>
  <div id="app" class="app-container">
    <!-- 1. Navbar Fixa no Topo -->
    <Navbar />

    <!-- 2. Conteúdo Central (Vídeo / Hero) -->
    <main class="main-content">
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
/* Trava a página inteira em 100vh sem scroll e fundo preto */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
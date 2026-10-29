<!-- src/modules/news/components/NewsCard.vue -->
<template>
  <article class="card h-100 bg-white text-dark border-0 shadow-lg rounded-4 overflow-hidden news-card">
    <div class="card-img-wrapper overflow-hidden" style="height: 200px;">
      <img :src="article.image" :alt="article.title" class="w-100 h-100 object-fit-cover transition-transform" />
    </div>

    <div class="card-body d-flex flex-column p-4">
      <span class="text-muted small mb-2 fw-semibold" aria-label="Data da publicação">
        {{ article.date }}
      </span>
      
      <h3 class="card-title h5 fw-bold text-dark mb-2 lh-sm">
        <a href="#" @click.prevent="$emit('read-more', article)" class="text-decoration-none text-dark stretched-link" :aria-label="article.title">
          {{ article.title }}
        </a>
      </h3>
      
      <p class="card-text text-secondary small lh-base mb-3">
        {{ article.excerpt }}
      </p>

      <div class="mt-auto text-end">
        <button @click="$emit('read-more', article)" class="btn p-0 fw-semibold text-dark small text-decoration-underline border-0 bg-transparent position-relative z-2">
          Leia Mais >
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  article: { type: Object, required: true }
})
defineEmits(['read-more'])
</script>

<style scoped>
.news-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff !important;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 1rem 2rem rgba(255, 255, 255, 0.15) !important;
}
.news-card:hover .card-img-wrapper img {
  transform: scale(1.05);
}
.card-img-wrapper img {
  transition: transform 0.5s ease;
}
</style>
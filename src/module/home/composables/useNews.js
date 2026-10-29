import { ref, computed, onMounted } from 'vue'
import { newsService } from '../services/newsService'

export function useNews() {
  const newsData = ref(null)
  const loading = ref(true)
  const visibleCount = ref(2)
  const selectedArticle = ref(null) // null = mostra listagem; objeto = mostra detalhe do artigo

  const loadData = async () => {
    try {
      loading.value = true
      newsData.value = await newsService.getNews()
    } finally {
      loading.value = false
    }
  }

  const displayedArticles = computed(() => {
    if (!newsData.value) return []
    return newsData.value.articles.slice(0, visibleCount.value)
  })

  const hasMore = computed(() => {
    if (!newsData.value) return false
    return visibleCount.value < newsData.value.articles.length
  })

  const loadMore = () => {
    visibleCount.value += 2
  }

  const openArticle = (article) => {
    selectedArticle.value = article
  }

  const backToList = () => {
    selectedArticle.value = null
  }

  onMounted(loadData)

  return {
    newsData,
    loading,
    displayedArticles,
    hasMore,
    loadMore,
    selectedArticle,
    openArticle,
    backToList
  }
}
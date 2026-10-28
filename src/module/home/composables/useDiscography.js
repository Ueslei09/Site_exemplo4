// src/modules/discography/composables/useDiscography.js
import { reactive, onMounted } from 'vue'
import { getDiscographyData } from '../services/discographyService'

export function useDiscography() {
  const discographyData = reactive({
    sectionTitle: '',
    sectionSubtitle: '',
    albums: []
  })

  onMounted(() => {
    const data = getDiscographyData()
    discographyData.sectionTitle = data.sectionTitle
    discographyData.sectionSubtitle = data.sectionSubtitle
    discographyData.albums = data.albums
  })

  return {
    discographyData
  }
}
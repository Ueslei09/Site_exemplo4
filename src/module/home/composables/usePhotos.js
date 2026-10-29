// src/modules/photos/composables/usePhotos.js
import { ref } from 'vue'
import { getPhotosPageData, getGalleryById } from '../services/photosService'

export function usePhotos() {
  const pageData = ref(getPhotosPageData())

  const fetchGallery = (id) => {
    return getGalleryById(id)
  }

  return {
    pageData,
    fetchGallery
  }
}
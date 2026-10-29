// src/modules/photos/services/photosService.js

export const getPhotosPageData = () => {
  return {
    title: "Galerias de Fotos",
    subtitle: "Explore os melhores momentos dos nossos shows e bastidores.",
    backgroundImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1920&auto=format&fit=crop",
    galleries: [
      {
        id: "varginha-mg",
        title: "Varginha - MG",
        date: "03/10/2026",
        coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
        photosCount: 7,
        images: [
          { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", alt: "Público e fãs entusiasmados no show de Varginha - MG" },
          { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop", alt: "Detalhe de braço com autógrafo do artista" },
          { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", alt: "Fã segurando cartaz na grade do show em Varginha" },
          { url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop", alt: "Artista cantando com guitarra no palco" },
          { url: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop", alt: "Performance ao vivo sob luzes de palco" },
          { url: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=800&auto=format&fit=crop", alt: "Artista interagindo com o público" },
          { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop", alt: "Vista panorâmica da arena do show à noite" }
        ]
      },
      {
        id: "avare-sp",
        title: "Avaré - SP",
        date: "27/09/2026",
        coverImage: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop",
        photosCount: 6,
        images: [
          { url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop", alt: "Show em Avaré SP com iluminação especial" },
          { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", alt: "Público vibrando no evento" }
        ]
      },
      {
        id: "frutal-mg",
        title: "Frutal - MG",
        date: "26/09/2026",
        coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
        photosCount: 8,
        images: [
          { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", alt: "Apresentação em Frutal MG" }
        ]
      }
    ]
  }
}

// Mantemos compatibilidade com o getGalleryById
export const getGalleryById = (id) => {
  const data = getPhotosPageData()
  return data.galleries.find(g => g.id === id) || data.galleries[0]
}
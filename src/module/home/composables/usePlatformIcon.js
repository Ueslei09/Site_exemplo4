// src/composables/usePlatformIcon.js

export function usePlatformIcon() {
  
  // Função que recebe o nome da plataforma e retorna as classes do Bootstrap Icons
  const getIconClass = (platformName) => {
    // Se nenhum nome for fornecido, retorna um ícone genérico padrão
    if (!platformName) return 'bi bi-music-note-beamed fs-5'
    
    // Converte para letras minúsculas para evitar erros com maiúsculas/minúsculas
    const name = platformName.toLowerCase()
    
    // Retorna a classe correspondente de acordo com a plataforma
    if (name.includes('spotify')) return 'bi bi-spotify fs-5 text-success'
    if (name.includes('deezer')) return 'bi bi-soundwave fs-5 text-warning'
    if (name.includes('youtube')) return 'bi bi-youtube fs-5 text-danger'
    if (name.includes('apple')) return 'bi bi-apple fs-5 text-light'
    
    // Retorno padrão caso não encontre nenhuma das redes conhecidas
    return 'bi bi-music-note-beamed fs-5'
  }

  // Retorna a função para ser utilizada nos componentes que precisarem
  return {
    getIconClass
  }
}
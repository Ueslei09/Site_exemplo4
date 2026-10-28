// src/modules/home/services/homeService.js
export const getHomeData = () => {
  return {
    videoType: 'local', 
    localVideoUrl: '/videoHome3.mp4', 
    youtubeVideoId: '', 

    // Configuração do Título vs Logótipo
    showLogoImage: false, // true para usar imagem, false para usar texto
    logoImage: '/logoSertanejo2.png', // Caminho da imagem na pasta public (ou outro logo que preferir)
    logoAlt: 'Logo O Embaixador',

    title: 'Rock roll', // Mantém-se caso queira usar texto no futuro
    subtitle: '',
    buttonText: 'VER AGENDA',
    buttonUrl: '/agenda'
  }
}
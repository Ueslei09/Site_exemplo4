// src/modules/home/services/homeService.js
export const getHomeData = () => {
  return {
    videoType: 'local', 
    localVideoUrl: '/videoHome1.mp4', 
    youtubeVideoId: '', 

    // Configuração do Título vs Logótipo
    showLogoImage: false, // true para usar imagem, false para usar texto
    logoImage: '/logosertanejo2.png', // Caminho da imagem na pasta public (ou outro logo que preferir)
    logoAlt: 'Logo O Embaixador',

    title: 'O EMBAIXADOR', // Mantém-se caso queira usar texto no futuro
    subtitle: 'Acompanhe a agenda oficial e todas as novidades em destaque.',
    buttonText: 'VER AGENDA',
    buttonUrl: '/agenda'
  }
}
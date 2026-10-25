// src/shared/services/footerService.js
export const getFooterData = () => {
  return {
    copyrightText: 'Todos os direitos reservados',
    brandName: 'Balada Music',
    year: '2026',
    socialLabel: 'Redes Sociais:',
    socialLinks: [
      { name: 'Instagram', url: '#', icon: 'instagram' },
      { name: 'Twitter', url: '#', icon: 'twitter' },
      { name: 'Facebook', url: '#', icon: 'facebook' },
      { name: 'YouTube', url: '#', icon: 'youtube' },
      { name: 'Spotify', url: '#', icon: 'spotify' },
      { name: 'TikTok', url: '#', icon: 'tiktok' }
    ]
  }
}
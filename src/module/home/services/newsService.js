export const newsService = {
  async getNews() {
    return {
      title: 'Notícias',
      subtitle: 'Fique por dentro das últimas notícias oficiais sobre o Rock Roll',
      backgroundImg: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1920',
      articles: [
        {
          id: 1,
          date: 'outubro 6, 2026',
          title: 'Em setembro, "Bala Alojada" alcança Top 1 nas rádios do Brasil',
          excerpt: 'Bala Alojada, do cantor Gusttavo Lima, está se consolidando como mais um dos grandes sucessos do artista.',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
          content: `Bala Alojada, do cantor Gusttavo Lima, está se consolidando como mais um dos grandes sucessos do artista. Com uma letra intensa e bastante romântica, a música demonstra toda a versatilidade interpretativa do Embaixador.\n\nO hit, gravado no palco da Festa do Peão de Americana, conquistou o primeiro lugar nas rádios no mês de setembro, com mais de 74 mil execuções por todo o país. Outro destaque é para a marca de mais de 160 mil publicações criadas nas redes com o áudio original da canção.\n\nNo YouTube, o videoclipe oficial já acumula mais de 167 milhões de visualizações e permanece, dois meses depois do lançamento, entre os principais vídeos de música.`
        },
        {
          id: 2,
          date: 'julho 2, 2026',
          title: '"Retrovisor" é a música mais tocada nas rádios brasileiras no primeiro semestre de 2026',
          excerpt: 'A faixa também acumula mais de 90 milhões de reproduções no Spotify.',
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
          content: `A faixa "Retrovisor" conquistou o público brasileiro e tornou-se a mais executada nas rádios de todo o território nacional durante o primeiro semestre de 2026.\n\nCom uma melodia envolvente e uma produção impecável, o single reflete a maturidade artística de Gusttavo Lima e sua conexão profunda com os fãs.`
        },
        {
          id: 3,
          date: 'setembro 28, 2026',
          title: 'Nova turnê internacional é anunciada para o próximo ano',
          excerpt: 'O Embaixador prepara uma mega estrutura para levar seus maiores sucessos para a Europa e Estados Unidos.',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
          content: `O cantor Gusttavo Lima anunciou oficialmente os detalhes de sua nova turnê internacional programada para o próximo ano. A megaestrutura contará com tecnologia de som e iluminação de última geração.`
        }
      ]
    }
  }
}
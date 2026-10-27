// src/modules/about/services/aboutService.js
export const aboutService = {
  getAboutData() {
    return {
      // Imagem de fundo única para toda a página "Sobre"
      uniqueBgImage: '/Sertanejo1Pagina_imagem.jpg',
      // Bloco introdutório de Biografia
      bioIntro: {
        title: 'Biografia',
        subtitle: 'Gusttavo Lima – O Embaixador da música sertaneja',
        text: 'Cantor, músico e compositor. Essa é a definição do artista sertanejo Gusttavo Lima. O autodidata da cidade de Presidente Olegário/MG que toca violão, viola, guitarra, bateria, baixo e sanfona, chegou ao mercado fonográfico com notoriedade: o mineiro é o responsável por dar tom a diversas canções sertanejas que fazem sucesso nas paradas de todo o País.'
      },
      
      timeline: [
        {
          year: '2010',
          title: 'O sucesso chegou',
          subtitle: 'Gusttavo Lima – O Embaixador da música sertaneja',
          text: 'Cantor, músico e compositor. Nivaldo Batista Lima, ou simplesmente Gusttavo Lima, nome artístico que adotou quando fazia parte da dupla Gusttavo e Alessandro, gravou em 2010 o seu primeiro CD e DVD "Inventor dos Amores", contando com 22 músicas, das quais 16 são composições próprias. Produzido por Pinóscchio, o trabalho ganhou destaque no meio dos fãs da música sertaneja devido ao sucesso das canções: Caso Consumado; Revelação; Rosas, Versos e Vinhos; Cor de Ouro e, principalmente, Inventor dos Amores, que projetou seu nome para o Brasil inteiro.',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2012',
          title: 'A consagração nacional',
          subtitle: 'O fenômeno Balada (Tchê Tcherere Tchê Tchê)',
          text: 'Com o lançamento do hit "Balada", o artista conquistou o topo das paradas não só no Brasil, mas em diversos países da Europa e da América Latina, consolidando-se como um dos maiores nomes da música latina.',
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2014',
          title: 'O Embaixador em Festa',
          subtitle: 'Marcos e recordes de público',
          text: 'Gravado em Goiânia, o álbum "Do Outro Lado da Moeda" trouxe parcerias internacionais e colocou o cantor definitivamente no patamar das maiores superproduções do entretenimento nacional.',
          image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2016',
          title: 'Buteco do Gusttavo Lima',
          subtitle: 'Resgatando os grandes clássicos',
          text: 'Um projeto inovador que celebrou as raízes da música sertaneja, reunindo clássicos inesquecíveis e transformando-se numa das festas mais concorridas do país.',
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2018',
          title: 'O Embaixador',
          subtitle: 'O álbum mais ouvido do ano',
          text: 'Gravado ao vivo na Festa do Peão de Barretos, o trabalho consagrou o título de "O Embaixador" e bateu recordes absolutos de reprodução nas plataformas digitais.',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2020',
          title: 'As Lives Históricas',
          subtitle: 'Conectando milhões em casa',
          text: 'Durante o período de isolamento, as transmissões ao vivo de Gusttavo Lima revolucionaram o mercado digital de entretenimento, acumulando marcas históricas globais de audiência.',
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2022',
          title: 'Embaixador In The USA',
          subtitle: 'Expansão internacional',
          text: 'Levando a bandeira da música sertaneja para arenas esgotadas nos Estados Unidos e na Europa, consolidando turnês mundiais de grande porte.',
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2024',
          title: 'Paraíso Particular',
          subtitle: 'Novos hits e inovação',
          text: 'Lançamento de álbuns intimistas e festivos que mantêm o artista no topo absoluto de todas as rádios e plataformas de streaming do Brasil.',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop'
        },
        {
          year: '2026',
          title: 'Legado e Futuro',
          subtitle: 'Sempre inovando',
          text: 'Celebrando mais de uma década e meia de carreira com novos projetos audaciosos, turnês exclusivas e forte presença digital.',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    }
  }
}
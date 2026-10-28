// src/modules/discography/services/discographyService.js
export const getDiscographyData = () => {
  return {
    /*sectionTitle: "Discografia",
    sectionSubtitle: "Ouça os maiores sucessos e álbuns do Embaixador nas principais plataformas digitais.",*/
    albums: [
      {
        id: 1,
        title: "Bala Alojada",
        year: "2023",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir o álbum Bala Alojada no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir o álbum Bala Alojada no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir aos clipes de Bala Alojada no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir o álbum Bala Alojada no Apple Music" }
        ]
      },
      {
        id: 2,
        title: "Vagabundo — Live in São Paulo",
        year: "2022",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir Vagabundo Live in São Paulo no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir Vagabundo Live in São Paulo no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir Vagabundo Live in São Paulo no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir Vagabundo Live in São Paulo no Apple Music" }
        ]
      },
      {
        id: 3,
        title: "Embaixador In Cariri",
        year: "2019",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir Embaixador In Cariri no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir Embaixador In Cariri no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir Embaixador In Cariri no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir Embaixador In Cariri no Apple Music" }
        ]
      },
      {
        id: 4,
        title: "O Embaixador",
        year: "2018",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir O Embaixador no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir O Embaixador no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir O Embaixador no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir O Embaixador no Apple Music" }
        ]
      },
      {
        id: 5,
        title: "Buteco do Gusttavo Lima 2",
        year: "2017",
        image: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir Buteco do Gusttavo Lima 2 no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir Buteco do Gusttavo Lima 2 no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir Buteco do Gusttavo Lima 2 no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir Buteco do Gusttavo Lima 2 no Apple Music" }
        ]
      },
      {
        id: 6,
        title: "Buteco do Gusttavo Lima",
        year: "2014",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir Buteco do Gusttavo Lima no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir Buteco do Gusttavo Lima no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir Buteco do Gusttavo Lima no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir Buteco do Gusttavo Lima no Apple Music" }
        ]
      },
      {
        id: 7,
        title: "Do Outro Lado da Moeda",
        year: "2014",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir Do Outro Lado da Moeda no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir Do Outro Lado da Moeda no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir Do Outro Lado da Moeda no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir Do Outro Lado da Moeda no Apple Music" }
        ]
      },
      {
        id: 8,
        title: "Ao Vivo em Goiânia",
        year: "2012",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir Ao Vivo em Goiânia no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir Ao Vivo em Goiânia no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir Ao Vivo em Goiânia no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir Ao Vivo em Goiânia no Apple Music" }
        ]
      },
      {
        id: 9,
        title: "Inventor dos Amores",
        year: "2010",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir o álbum Inventor dos Amores no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir o álbum Inventor dos Amores no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir o álbum Inventor dos Amores no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir o álbum Inventor dos Amores no Apple Music" }
        ]
      },
      {
        id: 10,
        title: "Gusttavo Lima e Alexandre",
        year: "2009",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop",
        streamingLinks: [
          { name: "Spotify", url: "#spotify", ariaLabel: "Ouvir Gusttavo Lima e Alexandre no Spotify" },
          { name: "Deezer", url: "#deezer", ariaLabel: "Ouvir Gusttavo Lima e Alexandre no Deezer" },
          { name: "YouTube", url: "#youtube", ariaLabel: "Assistir Gusttavo Lima e Alexandre no YouTube" },
          { name: "Apple Music", url: "#applemusic", ariaLabel: "Ouvir Gusttavo Lima e Alexandre no Apple Music" }
        ]
      }
    ]
  }
}
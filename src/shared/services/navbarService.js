// src/shared/services/navbarService.js


export const getNavbarData = () => {
  return {
    brand: {
      name: "",
      logoUrl: "/logoSertanejo2.png", // Pode colocar o link da imagem do logo aqui se tiver
      homeUrl: "/"
    },
    navLinks: [
      { name: "Início", url: "/", active: true },
      { name: "Sobre", url: "/sobre" },
      { name: "Agenda", url: "/agenda" },
      { name: "Discografia", url: "/discografia" },
      { name: "Fotos", url: "/fotos" },
      { name: "Notícias", url: "/noticias" },
      { name: "Central Do GL", url: "/central" },
      { name: "Contato", url: "/contato" },
      { name: "Loja", url: "/loja" }
    ]
  }
}
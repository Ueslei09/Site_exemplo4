// src/modules/agenda/services/agendaService.js
export const getAgendaData = () => {
  return {
    title: "Agenda",
    description: "Confira a agenda completa de shows do Rock Roll e fique por dentro da programação.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop", // Pode substituir pelo caminho local com new URL('@/assets/...', import.meta.url).href se preferir
    buttonText: "Ver Próximos Shows"
  }
}
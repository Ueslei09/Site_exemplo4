// src/modules/agenda/composables/useAgenda.js
import { reactive, onMounted } from 'vue'
import { getAgendaData } from '../services/agendaService'

export function useAgenda() {
  const agendaData = reactive({
    title: '',
    description: '',
    image: '',
    buttonText: ''
  })

  onMounted(() => {
    const data = getAgendaData()
    agendaData.title = data.title
    agendaData.description = data.description
    agendaData.image = data.image
    agendaData.buttonText = data.buttonText
  })

  return {
    agendaData
  }
}
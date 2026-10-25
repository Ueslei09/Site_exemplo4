import '@/shared/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar o CSS do Bootstrap e os Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Opcional: Se precisar de componentes JavaScript do Bootstrap (como modais ou dropdowns)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



const app = createApp(App)

app.use(router)

app.mount('#app')

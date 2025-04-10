// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar Bootstrap e seus estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importar um arquivo de estilos customizados se necessário
import './assets/main.css'

createApp(App)
  .use(router)
  .mount('#app')

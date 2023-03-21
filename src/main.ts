import { createApp } from 'vue'
import App from './App.vue'
import { registerComponents } from './components/index'

registerComponents()

import './assets/main.css'

createApp(App).mount('#app')

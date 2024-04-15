import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'tailwindcss/tailwind.css';
import './assets/main.css'; // Your main styles
import './assets/dark-theme.css'; // Dark theme styles

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
